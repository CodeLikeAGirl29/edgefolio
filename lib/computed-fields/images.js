import fs from 'fs'
import { join } from 'path'
import sizeOf from 'image-size'

const resolve = (image, { mdxOptions }) => {
  const test = image && /^\/.*[/.](gif|jpg|jpeg|png)$/i.test(image.src)
  if (!test) return

  const filePath = join(process.cwd(), mdxOptions.publicDir, image.src)
  if (!fs.existsSync(filePath)) return null

  try {
    const { width, height } = sizeOf(filePath)
    image.width = width
    image.height = height
  } catch (err) {
    console.error(err)
  }

  return image
}

// Single entry
export const image = {
  hasSubFields: false,
  resolve,
}

// Multiple entries
export const images = {
  hasSubFields: false,
  resolve: (images, { mdxOptions }) => images.map((image) => resolve(image, { mdxOptions })),
}
