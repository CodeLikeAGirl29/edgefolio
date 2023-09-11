import fs from 'fs'
import { join } from 'path'

const resolve = async (icon, { mdxOptions }) => {
  const test = icon && /^\/.*[/.](svg)$/i.test(icon.src)
  if (!test) return null

  const filePath = join(process.cwd(), mdxOptions.publicDir, icon.src)
  if (!fs.existsSync(filePath)) return null

  try {
    icon.source = await fs.readFileSync(filePath, 'utf8')
  } catch (err) {
    console.error(err)
  }

  return icon
}

// Single entry
export const icon = {
  hasSubFields: false,
  resolve,
}

// Multiple entries
export const icons = {
  hasSubFields: false,
  resolve: async (icons, { mdxOptions }) =>
    await Promise.all(icons.map(async (icon) => await resolve(icon, { mdxOptions }))),
}
