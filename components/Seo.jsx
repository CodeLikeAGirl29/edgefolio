import React from 'react'
import { NextSeo } from 'next-seo'
import { siteMetaData } from '../theme.config'

const Seo = (props) => {
  const { seo = {}, title, description, images, pageUrl } = props

  const metaData = {
    ...siteMetaData,
    title,
    description,
    ...seo,
  }

  const ogImageUrl = images?.[0]?.src ? metaData.siteUrl + images[0].src : undefined

  const openGraph = {
    url: pageUrl,
    title: metaData.title,
    description: metaData.description,
    images: [{ url: ogImageUrl }],
    site_name: metaData.siteName,
    locale: metaData.locale,
  }

  return <NextSeo {...metaData} openGraph={openGraph} />
}

export default Seo
