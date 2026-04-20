import { promises as fs } from 'node:fs'
import path from 'node:path'
import sharp from 'sharp'

const projectRoot = process.cwd()
const imagesDir = path.join(projectRoot, 'public', 'images', 'blog-custom')
const supportedExtensions = new Set(['.jpg', '.jpeg', '.png'])

async function optimizeImages() {
  const entries = await fs.readdir(imagesDir)
  let optimizedCount = 0

  for (const fileName of entries) {
    const extension = path.extname(fileName).toLowerCase()
    if (!supportedExtensions.has(extension)) {
      continue
    }

    const inputPath = path.join(imagesDir, fileName)
    const outputName = `${path.basename(fileName, extension)}.webp`
    const outputPath = path.join(imagesDir, outputName)

    await sharp(inputPath)
      .rotate()
      .resize({ width: 1600, withoutEnlargement: true })
      .webp({ quality: 74, effort: 6 })
      .toFile(outputPath)

    optimizedCount += 1
  }

  console.log(`Optimized ${optimizedCount} images to WebP in public/images/blog-custom`)
}

optimizeImages().catch((error) => {
  console.error('Image optimization failed:', error)
  process.exitCode = 1
})
