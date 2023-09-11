import fg from 'fast-glob'
import { join } from 'path'
import equal from 'fast-deep-equal'

export async function getFiles(path, mdxOptions) {
  if (!mdxOptions || !mdxOptions.pagesDir) {
    throw Error('pagesDir is missing from mdxOptions')
  }

  if (path && typeof path !== 'string') {
    throw Error('path should be type string received ' + typeof path)
  }

  const baseDir = path ? join(mdxOptions.pagesDir, path) : mdxOptions.pagesDir

  const paths = await fg.sync(
    //Always use forward-slashes in glob expressions
    join(baseDir, '**', `*${mdxOptions.fileExt}`).replace(/\\/g, '/')
  )

  return paths.map((filePath) => ({
    filePath,
    slug: filePath
      .replace(mdxOptions.fileExt, '')
      .split('/')
      .filter((s) => s !== 'index')
      .filter(Boolean)
      .slice(1),
  }))
}

export async function getFileBySlug(slug, mdxOptions) {
  let rootPath = null

  // Limit the search to the sub-directory if the file is inside a sub-directory
  if (Array.isArray(slug) && slug.length > 1) {
    rootPath = slug.slice(0, slug.length - 1).join('/')
  }

  const files = await getFiles(rootPath, mdxOptions)

  return files.find((page) => equal(page.slug, slug))
}

export async function getManyFilesBySlug(slug, mdxOptions) {
  if (!slug || !Array.isArray(slug)) {
    throw Error('slug should be type array received ' + typeof slug)
  }

  let rootPath = slug.join('/')

  const files = await getFiles(rootPath, mdxOptions)

  // Get all collection files excluding collection's index page
  return files.filter(({ slug }) => slug.length > 1)
}
