import React from 'react'
import classNames from 'clsx'
import ContentRenderer from '@/components/ContentRenderer'
import Image from '@/components/Image'
import Sep from '@/components/Sep'
import BlogCardHorizontalMini from '@/components/BlogCardHorizontalMini'
import Reveal from '@/components/Reveal'
import Companies from '@/components/Companies'

const HeroPhoto = ({ main }) =>
  main.images?.[1] && (
    <div className="relative mx-auto w-full text-center">
      <Reveal
        delay={1000}
        animation="fade-in slide-in-top"
        className="prose absolute -bottom-4 left-1/2 z-20 w-full -translate-x-1/2"
      >
        <h1 className="text-gradient-500 m-0 text-7xl drop-shadow-md md:text-8xl">{main.name}</h1>
      </Reveal>
      <Reveal
        animation="fade-in zoom-in"
        className="absolute left-1/2 h-72 w-72 -translate-x-1/2 md:bottom-0 md:h-96 md:w-96"
      >
        <div
          className={classNames(
            'h-full w-full rounded-full md:animate-spin-slow',
            'bg-gradient-to-tr from-alpha-600 via-beta to-accent'
          )}
        />
      </Reveal>
      <Image
        src={main.images[1].src}
        width={main.images[1].width}
        height={main.images[1].height}
        alt={main.images[1].alt}
        animation="fade-in slide-in-top"
        className="mx-auto"
        priority
      />
    </div>
  )

const HeroAbout = ({ main }) => (
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
)

const Achievements = ({ achievements }) => (
  <>
    <Reveal
      animation="fade-in slide-in-bottom"
      className={classNames(
        'relative z-10',
        'mx-auto max-w-5xl p-10 text-center md:p-6',
        'ld:grid-cols-4 prose prose-invert grid grid-cols-2 lg:grid-cols-4',
        'bg-gradient-omega-900 shadow-lg',
        'divide-omega-700/30 lg:divide-x'
      )}
    >
      {achievements?.map((item, i) => (
        <Reveal key={i} animation="fade-in" delay={i * 250} className="flex-1 p-2">
          <h3 className="m-0 text-accent">{item.number}</h3>
          <p className="mt-2 mb-0 text-omega-300">{item.text}</p>
        </Reveal>
      ))}
    </Reveal>
    <Reveal
      animation="fade-in scale-x"
      className="mx-auto h-px max-w-5xl bg-gradient-to-r from-accent via-beta to-alpha"
    />
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
        <Achievements achievements={achievements} />
        <Sep size={12} />
        <HeroAbout main={main} />
        <Sep size={12} />
        <div className="prose prose-invert">
          <ContentRenderer source={cta} />
        </div>
        <div className="hidden md:block">
          <Sep size={24} />
          <Companies {...companies} />
        </div>
      </div>
    </div>
    <div className="bg-gradient-omega-900 py-10 md:p-10 lg:p-20">
      <Articles articles={articles} />
    </div>
  </div>
)

export default Layout
