import React from 'react'
import classNames from 'clsx'
import ContentRenderer from '@/components/ContentRenderer'
import Image from '@/components/Image'
import Sep from '@/components/Sep'
import BlogCardHorizontalMini from '@/components/BlogCardHorizontalMini'
import Reveal from '@/components/Reveal'
import Companies from '@/components/Companies'
import { FiThumbsUp } from 'react-icons/fi'

const HeroPhoto = ({ main }) =>
  main.images?.[1] && (
    <div className="relative mx-auto w-full max-w-md text-center">
      <Image
        src={main.images[1].src}
        width={main.images[1].width}
        height={main.images[1].height}
        alt={main.images[1].alt}
        animation="zoom-out"
        className="mx-auto"
        priority
      />
      <Sep size={12} />
    </div>
  )

const HeroAbout = ({ main }) => (
  <>
    <div className="inline-flex items-center justify-center space-x-2 bg-accent py-2 px-4 text-accent-50">
      <FiThumbsUp className="text-xl" />
      <small className="font-bold">{main.slogan}</small>
    </div>
    <Sep size={12} />
    <Reveal
      animation="fade-in slide-in-bottom"
      className={classNames(
        'mx-auto max-w-3xl px-4 md:p-0',
        'prose prose-invert prose-headings:my-4 first-of-type:prose-headings:mt-0',
        'prose-p:mx-auto prose-p:max-w-prose md:prose-headings:my-6',
        'prose-hr:mx-auto prose-hr:max-w-md'
      )}
    >
      <ContentRenderer source={main} />
    </Reveal>
  </>
)

const Achievements = ({ achievements }) => (
  <>
    <div
      className={classNames(
        'p-10 text-center md:p-6',
        'ld:grid-cols-4 prose prose-invert grid grid-cols-2 lg:grid-cols-4',
        'bg-gradient-to-tr from-alpha-100 via-alpha to-beta',
        'divide-omega-700/30 lg:divide-x'
      )}
    >
      {achievements?.map((item, i) => (
        <Reveal key={i} animation="fade-in" delay={i * 150} className="flex-1 p-2">
          <h3 className="m-0 text-omega-900">{item.number}</h3>
          <p className="mt-2 mb-0 font-bold text-omega-700">{item.text}</p>
        </Reveal>
      ))}
    </div>
  </>
)

const Articles = ({ articles }) => (
  <>
    <div className="prose prose-invert text-center">
      <ContentRenderer source={articles?.content} />
    </div>
    <div className="mt-8 grid gap-6 md:mt-14 md:gap-4 lg:grid-cols-2">
      {articles?.collection?.records?.map((record) => (
        <BlogCardHorizontalMini key={record.slug.join('/')} {...record} />
      ))}
    </div>
  </>
)

const Layout = ({ main = {}, articles = {}, cta = {}, achievements = [], companies }) => (
  <div className="mx-auto my-auto">
    <div className="items-center py-10 md:p-10 lg:p-20">
      <div className="text-center">
        <HeroPhoto main={main} />
        <HeroAbout main={main} />
        <Sep size={12} />
        <div className="prose prose-invert">
          <ContentRenderer source={cta} />
        </div>
        <Sep className="my-8 my-16" />
        <Achievements achievements={achievements} />
      </div>
      <Sep size={24} />
      <Articles articles={articles} />
      <div className="hidden md:block">
        <Sep size={24} />
        <Companies {...companies} />
      </div>
    </div>
  </div>
)

export default Layout
