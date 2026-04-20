import { promises as fs } from 'node:fs'
import path from 'node:path'

const projectRoot = process.cwd()
const srcDir = path.join(projectRoot, 'src')
const routerPath = path.join(srcDir, 'router', 'AppRouter.jsx')

async function getJsxFiles(directory) {
  const entries = await fs.readdir(directory, { withFileTypes: true })
  const files = []

  for (const entry of entries) {
    const resolvedPath = path.join(directory, entry.name)
    if (entry.isDirectory()) {
      files.push(...(await getJsxFiles(resolvedPath)))
    } else if (entry.name.endsWith('.jsx') || entry.name.endsWith('.js')) {
      files.push(resolvedPath)
    }
  }

  return files
}

function normalizePath(pathname) {
  if (pathname.length > 1 && pathname.endsWith('/')) {
    return pathname.slice(0, -1)
  }
  return pathname
}

async function checkInternalLinks(files) {
  const routerSource = await fs.readFile(routerPath, 'utf8')
  const routePaths = [...routerSource.matchAll(/path="([^"]+)"/g)]
    .map((match) => match[1])
    .filter((value) => value !== '*')

  const exactRoutes = new Set(routePaths.filter((value) => !value.includes(':')).map(normalizePath))
  const dynamicRoutes = routePaths
    .filter((value) => value.includes(':'))
    .map((value) => new RegExp(`^${value.replace(/:[^/]+/g, '[^/]+')}$`))

  const issues = []

  for (const file of files) {
    const source = await fs.readFile(file, 'utf8')
    const links = [
      ...source.matchAll(/to="(\/[^"#?]*)"/g),
      ...source.matchAll(/href="(\/[^"#?]*)"/g),
    ]

    for (const linkMatch of links) {
      const rawPath = normalizePath(linkMatch[1])
      if (rawPath.startsWith('/images/')) {
        continue
      }

      const hasExactMatch = exactRoutes.has(rawPath)
      const hasDynamicMatch = dynamicRoutes.some((matcher) => matcher.test(rawPath))

      if (!hasExactMatch && !hasDynamicMatch) {
        issues.push({
          file: path.relative(projectRoot, file),
          path: rawPath,
        })
      }
    }
  }

  return issues
}

async function checkExternalLinks(files) {
  const externalUrls = new Set()

  for (const file of files) {
    const source = await fs.readFile(file, 'utf8')
    for (const match of source.matchAll(/https:\/\/[^\s'"`]+/g)) {
      externalUrls.add(match[0].replace(/[),.;]$/, ''))
    }
  }

  const issues = []
  const urls = [...externalUrls]

  for (const url of urls) {
    try {
      const response = await fetch(url, { method: 'HEAD', redirect: 'follow' })
      if (response.status >= 400) {
        issues.push({ url, status: response.status })
      }
    } catch {
      issues.push({ url, status: 'unreachable' })
    }
  }

  return issues
}

async function runChecks() {
  const files = await getJsxFiles(srcDir)
  const internalIssues = await checkInternalLinks(files)
  const externalIssues = await checkExternalLinks(files)

  if (internalIssues.length === 0) {
    console.log('Internal links: OK')
  } else {
    console.log('Internal links with no route:')
    for (const issue of internalIssues) {
      console.log(`- ${issue.file} -> ${issue.path}`)
    }
  }

  if (externalIssues.length === 0) {
    console.log('External links: OK')
  } else {
    console.log('External link issues:')
    for (const issue of externalIssues) {
      console.log(`- ${issue.url} -> ${issue.status}`)
    }
  }

  if (internalIssues.length > 0 || externalIssues.length > 0) {
    process.exitCode = 1
  }
}

runChecks().catch((error) => {
  console.error('Link check failed:', error)
  process.exitCode = 1
})
