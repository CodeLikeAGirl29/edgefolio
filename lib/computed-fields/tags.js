import matter from 'gray-matter'
import { getManyFilesBySlug } from '../mdx-files'

const tags = {
  hasSubFields: false,
  resolve: async (tags, { mdxOptions }) => {
    if (!Array.isArray(tags)) return tags

    // Get tags collection
    const files = await getManyFilesBySlug(['tags'], mdxOptions)

    let results = await Promise.all(
      tags.map(async (tag) => {
        // tag without collection
        const file = files.find(({ slug }) => slug[slug.length - 1] === tag)
        if (!file) return { title: tag }
        // tag with collection
        const fileData = await matter.read(file.filePath)
        const { collection, ...meta } = fileData?.data || {}
        return { ...meta, slug: file.slug }
      })
    )

    return results.filter(Boolean)
  },
}

export default tags
