import { Feed } from 'feed'
import { siteMetaData } from '../theme.config'

export default async function generateRssFeed(records, rssPath) {
  const { siteUrl, defaultTitle, description, siteName, email, locale, twitter } = siteMetaData

  const date = new Date()

  const author = {
    name: siteName,
    email,
    link:
      twitter && twitter.handle
        ? `https://twitter.com/${twitter.handle.replace('@', '')}`
        : siteUrl,
  }

  // Creating feed
  const feed = new Feed({
    title: defaultTitle,
    description: description,
    id: siteUrl,
    link: siteUrl,
    image: `${siteUrl}/favicon.ico`,
    favicon: `${siteUrl}/favicon.ico`,
    copyright: `All rights reserved ${date.getFullYear()}, ${siteName}`,
    updated: date,
    language: locale,
    author,
    feedLinks: {
      rss2: `${rssPath}/feed.xml`,
      json: `${rssPath}/feed.json`,
    },
  })

  // Adding blogs to the rss feed
  records.forEach((record) => {
    const { title, slug, description, date } = record

    const url = `${siteUrl}/${slug.join('/')}`

    feed.addItem({
      title: title,
      id: url,
      link: url,
      description: description,
      author: [author],
      date: new Date(date),
    })
  })

  return feed
}
