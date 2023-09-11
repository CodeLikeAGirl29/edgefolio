import equal from 'fast-deep-equal'
import remarkUnwrapImages from 'remark-unwrap-images'
import rehypeImgSize from 'rehype-img-size'
import remarkGfm from 'remark-gfm'
import rehypeSlug from 'rehype-slug'
import rehypePrism from 'rehype-prism-plus'
import rehypeExternalLinks from 'rehype-external-links'
import remarkSqueezeParagraphs from 'remark-squeeze-paragraphs'
import rehypePresetMinify from 'rehype-preset-minify'
import { mdxConfig } from '../theme.config'

const getMdxOptions = (options = {}) => {
  const { slug = [] } = options

  if (!mdxConfig) {
    throw Error('mdxConfig is missing from theme.config.js')
  }

  const { collections = [], publicDir, remarkPlugins = [], rehypePlugins = [] } = mdxConfig

  // Common plugins
  const allRemarkPlugins = [
    remarkGfm,
    remarkSqueezeParagraphs,
    remarkUnwrapImages,
    ...remarkPlugins,
  ]

  const allRehypePlugins = [
    [
      rehypeImgSize,
      {
        dir: publicDir,
      },
    ],
    [
      rehypeExternalLinks,
      {
        target: '_blank',
        protocols: ['http', 'https', 'mailto', 'tel'],
      },
    ],
    rehypePrism,
    rehypePresetMinify,
    ...rehypePlugins,
  ]

  // Collection page plugins
  const collectionSlugs = collections.map((path) => path.split('/').filter(Boolean))
  const isCollectionPage =
    // Check if slug is a sub-directory & parent directory matches a collection
    slug.length > 1 && collectionSlugs.find((s) => equal(s, slug.slice(0, -1)))
  if (isCollectionPage) {
    allRehypePlugins.push(rehypeSlug)
  }

  return {
    ...mdxConfig,
    collections: collectionSlugs,
    options: {
      remarkPlugins: allRemarkPlugins,
      rehypePlugins: allRehypePlugins,
    },
  }
}

export default getMdxOptions
