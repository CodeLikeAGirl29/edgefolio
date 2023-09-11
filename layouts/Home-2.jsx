import React from 'react'
import classNames from 'clsx'
import ContentRenderer from '@/components/ContentRenderer'
import Image from '@/components/Image'
import Sep from '@/components/Sep'
import Reveal from '@/components/Reveal'
import Companies from '@/components/Companies'

const HeroPhoto = ({ main }) => (
  <>
    {main.images?.[0] && (
      <div className="hidden md:block">
        <Image
          src={main.images[0].src}
          width={main.images[0].width}
          height={main.images[0].height}
          alt={main.images[0].alt}
          animation="slide-in-top fade-in"
          priority
        />
      </div>
    )}
    {main.images?.[1] && (
      <div className="md:hidden">
        <Image
          src={main.images[1].src}
          width={main.images[1].width}
          height={main.images[1].height}
          alt={main.images[1].alt}
          className="mx-auto"
          priority
        />
      </div>
    )}
  </>
)

const HeroAbout = ({ main }) => (
  <Reveal
    animation="fade-in slide-in-right"
    className={classNames(
      'prose prose-invert prose-headings:my-4 first-of-type:prose-headings:mt-0 prose-p:hidden',
      'prose-headings:my-6 prose-pre:max-w-[100vw] md:prose-p:block md:prose-pre:max-w-lg'
    )}
  >
    <ContentRenderer source={main} />
  </Reveal>
)

const Achievements = ({ achievements }) => (
  <div
    className={classNames(
      'prose prose-invert hidden grow grid-cols-2 gap-2 sm:grid md:gap-6 md:pr-6'
    )}
  >
    {achievements?.map((item, i) => (
      <div key={i} className="flex flex-col items-center justify-center md:flex-row">
        <h2 className="m-0 text-white md:pr-4">{item.number}</h2>
        <div className="dark:text-accent-400">{item.text}</div>
      </div>
    ))}
  </div>
)

const Layout = ({ main = {}, cta = {}, achievements = [], companies }) => (
  <div className="mx-auto my-auto py-4 md:p-10 lg:p-20">
    <div className="absolute right-0 top-0 box-content hidden h-full w-1/4 bg-gradient-to-br from-alpha-100 via-alpha to-beta pl-5 md:block" />
    <div className="items-end text-center md:flex md:text-left">
      <div className="relative shrink-0 basis-1/2 text-center md:order-2 md:-ml-20">
        <HeroPhoto main={main} />
      </div>
      <div className="z-10 mt-6 basis-full md:mb-12 md:mt-0">
        <HeroAbout main={main} />
      </div>
    </div>
    <div className="relative z-10">
      <Sep line className="hidden md:block" />
      <div
        className={classNames(
          'md:bg-gradient-omega-900 flex flex-wrap items-center justify-between',
          'px-4 md:p-8 md:shadow-xl'
        )}
      >
        <Achievements achievements={achievements} />
        <div className="prose prose-invert grow text-center">
          <ContentRenderer source={cta} />
        </div>
      </div>
      <div className="mt-6 mt-12 hidden w-3/4 px-2 pr-12 md:block">
        <Companies {...companies} />
      </div>
    </div>
  </div>
)

export default Layout
