import React from 'react'
import dynamic from 'next/dynamic'
import { ArticleJsonLd } from 'next-seo'
import ContentRenderer from '@/components/ContentRenderer'
import Image from '@/components/Image'
import Tag from '@/components/Tag'
import Date from '@/components/Date'
import ImageGallery from '@/components/ImageGallery'
import Sep from '@/components/Sep'
import Newsletter from '@/components/Newsletter'
import { siteMetaData } from '../theme.config'
import authorImage from '../public/author-profile-picture.jpg'

const SocialShare = dynamic(() => import('@/components/SocialShare'))

const Layout = ({
  content,
  title,
  description,
  date,
  seo = {},
  tags = [],
  images = [],
  attributes = [],
  pageUrl,
}) => {
  const { siteUrl, authorName } = siteMetaData || {}

  return (
    <>
      <ArticleJsonLd
        type="BlogPosting"
        url={pageUrl}
        title={title}
        images={images.map((img) => siteUrl + img.src)}
        datePublished={date}
        authorName={authorName}
        description={seo?.description || description}
      />
      <div className="relative mx-auto my-auto w-full p-4 pb-20 lg:p-20">
        <div className="prose prose-invert">
          <header className="mx-auto max-w-3xl space-y-10 text-center">
            <div>
              {tags?.map((tag) => (
                <Tag key={tag.title} slug={tag.slug} className="m-0.5 font-mono text-sm lg:mx-1">
                  {tag.title}
                </Tag>
              ))}
            </div>
            <h1 className="mb-0">{title}</h1>
            <div className="flex items-center justify-center">
              <div className="basis-1/3 text-right">
                By <strong>{authorName}</strong>
              </div>
              <div className="not-prose mx-6 box-content h-24 w-24 overflow-hidden rounded-full border-4 border-alpha bg-alpha">
                <Image
                  src={authorImage}
                  alt="Picture of the author"
                  animation="fade-in"
                  className="rounded-full object-cover"
                  priority
                  fill
                />
              </div>
              <div className="basis-1/3 text-left">
                <Date date={date} />
              </div>
            </div>
          </header>

          {attributes.length > 0 && (
            <div className="dark:bg-gradient-omega-900 mt-12 md:dark:shadow-2xl">
              <Sep line />
              <dl className="grid grid-cols-fluid gap-4 p-4 [--tw-fluid-col-min:8rem] md:gap-6 md:py-6 md:px-12">
                {attributes.map(({ label, value }) => (
                  <div key={label}>
                    <dt className="mb-2 dark:text-alpha">{label}</dt>
                    <dd className="m-0">{value}</dd>
                  </div>
                ))}
              </dl>
            </div>
          )}

          <div className="not-prose mt-6 text-center md:mt-12">
            <ImageGallery images={images} />
          </div>

          <div className="mt-6 grid gap-6 md:mt-12 md:grid-cols-[auto_3fr_auto] md:gap-0">
            <div>
              <SocialShare url={pageUrl} className="sticky left-10 top-12 z-10" />
            </div>
            <div className="prose prose-invert mx-auto max-w-prose prose-pre:max-w-[90vw]">
              <ContentRenderer source={content} />
            </div>
          </div>

          <Sep line className="my-20" />

          <div className="mx-auto max-w-lg">
            <Newsletter className="text-center" />
          </div>
        </div>
      </div>
    </>
  )
}

export default Layout
