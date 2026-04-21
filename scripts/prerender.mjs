#!/usr/bin/env node
import http from 'node:http'
import { createReadStream } from 'node:fs'
import { stat, mkdir, writeFile, readFile } from 'node:fs/promises'
import path from 'node:path'
import { fileURLToPath, pathToFileURL } from 'node:url'
import puppeteer from 'puppeteer'

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const ROOT = path.resolve(__dirname, '..')
const DIST = path.join(ROOT, 'dist')
const PORT = 4179
const HOST = '127.0.0.1'

const MIME = {
  '.html': 'text/html; charset=utf-8',
  '.js': 'application/javascript; charset=utf-8',
  '.mjs': 'application/javascript; charset=utf-8',
  '.css': 'text/css; charset=utf-8',
  '.json': 'application/json; charset=utf-8',
  '.svg': 'image/svg+xml',
  '.webp': 'image/webp',
  '.png': 'image/png',
  '.jpg': 'image/jpeg',
  '.jpeg': 'image/jpeg',
  '.ico': 'image/x-icon',
  '.woff2': 'font/woff2',
  '.txt': 'text/plain; charset=utf-8',
  '.xml': 'application/xml; charset=utf-8',
}

async function loadRoutes() {
  const servicesUrl = pathToFileURL(path.join(ROOT, 'src/data/services.js')).href
  const postsUrl = pathToFileURL(path.join(ROOT, 'src/data/posts.js')).href

  // services.js imports image assets via relative paths; stub them via dynamic import shim.
  const servicesMod = await import(servicesUrl).catch(async (err) => {
    // Image imports may fail outside Vite — fall back to regex parse.
    const src = await readFile(path.join(ROOT, 'src/data/services.js'), 'utf8')
    const slugs = [...src.matchAll(/slug:\s*'([^']+)'/g)].map((m) => m[1])
    return { services: slugs.map((slug) => ({ slug })), __fallback: true, __err: err }
  })
  const postsMod = await import(postsUrl).catch(async () => {
    const src = await readFile(path.join(ROOT, 'src/data/posts.js'), 'utf8')
    const slugs = [...src.matchAll(/slug:\s*'([^']+)'/g)].map((m) => m[1])
    return { posts: slugs.map((slug) => ({ slug })) }
  })

  const staticRoutes = ['/', '/about', '/services', '/blog', '/faq', '/contact', '/privacy', '/terms']
  const serviceRoutes = servicesMod.services.map((s) => `/services/${s.slug}`)
  const postRoutes = postsMod.posts.map((p) => `/blog/${p.slug}`)

  return [...staticRoutes, ...serviceRoutes, ...postRoutes]
}

function startServer() {
  const server = http.createServer(async (req, res) => {
    try {
      const url = new URL(req.url, `http://${HOST}:${PORT}`)
      let filePath = path.join(DIST, decodeURIComponent(url.pathname))
      let stats
      try {
        stats = await stat(filePath)
        if (stats.isDirectory()) {
          filePath = path.join(filePath, 'index.html')
          stats = await stat(filePath)
        }
      } catch {
        // SPA fallback
        filePath = path.join(DIST, 'index.html')
        stats = await stat(filePath)
      }
      res.statusCode = 200
      res.setHeader('Content-Type', MIME[path.extname(filePath).toLowerCase()] || 'application/octet-stream')
      res.setHeader('Content-Length', stats.size)
      createReadStream(filePath).pipe(res)
    } catch (err) {
      res.statusCode = 500
      res.end(`Server error: ${err.message}`)
    }
  })

  return new Promise((resolve) => {
    server.listen(PORT, HOST, () => resolve(server))
  })
}

async function prerenderRoute(browser, route) {
  const page = await browser.newPage()
  await page.setViewport({ width: 1280, height: 800 })
  const url = `http://${HOST}:${PORT}${route}`
  await page.goto(url, { waitUntil: 'networkidle0', timeout: 30000 })
  // Give SeoManager + Suspense an extra microtask flush.
  await page.evaluate(() => new Promise((r) => setTimeout(r, 50)))

  const rawHtml = await page.content()
  // Restore non-blocking font preload swap (puppeteer's onload fires during render and rewrites rel back to "stylesheet").
  const html = rawHtml.replace(
    /<link rel="stylesheet" as="style" href="(https:\/\/fonts\.googleapis\.com[^"]+)"([^>]*)>/g,
    '<link rel="preload" as="style" href="$1" onload="this.onload=null;this.rel=\'stylesheet\'">'
  )
  await page.close()

  // Determine output path: /about -> dist/about/index.html; / stays dist/index.html.
  let outPath
  if (route === '/') {
    outPath = path.join(DIST, 'index.html')
  } else {
    outPath = path.join(DIST, route.replace(/^\//, ''), 'index.html')
  }

  await mkdir(path.dirname(outPath), { recursive: true })
  await writeFile(outPath, html, 'utf8')
  return outPath
}

async function main() {
  // Ensure dist exists.
  try {
    await stat(DIST)
  } catch {
    console.error('dist/ not found — run `vite build` first.')
    process.exit(1)
  }

  const routes = await loadRoutes()
  console.log(`Prerendering ${routes.length} routes...`)

  const server = await startServer()
  const browser = await puppeteer.launch({
    headless: 'new',
    args: ['--no-sandbox', '--disable-setuid-sandbox'],
  })

  let ok = 0
  let failed = 0
  try {
    for (const route of routes) {
      try {
        const out = await prerenderRoute(browser, route)
        const rel = path.relative(ROOT, out)
        console.log(`  ✓ ${route.padEnd(48)} -> ${rel}`)
        ok += 1
      } catch (err) {
        console.error(`  ✗ ${route} — ${err.message}`)
        failed += 1
      }
    }
  } finally {
    await browser.close()
    server.close()
  }

  console.log(`\nDone. ${ok} ok, ${failed} failed.`)
  if (failed > 0) process.exit(1)
}

main().catch((err) => {
  console.error(err)
  process.exit(1)
})
