import React from 'react'
import classNames from 'clsx'
import Link from 'next/link'
import Image from '@/components/Image'
import Tag from '@/components/Tag'
import Date from '@/components/Date'

const BlogCardHorizontal = ({ className, title, images, slug, date, tags }) => (
  <div
    className={classNames(
      'group prose prose-zinc flex dark:prose-invert',
      'md:bg-gradient-omega-900 md:shadow-lg',
      className
    )}
  >
    {images?.[0] && (
      <Link
        href={slug.join('/')}
        aria-label={title}
        className="not-prose relative inline-block h-32 w-1/3 overflow-hidden md:h-40"
      >
        <Image
          src={images[0].src}
          alt={images[0].alt || title}
          animation="fade-in zoom-out"
          wrapperClassName="transition-transform group-hover:scale-105 duration-300 ease-out before:bg-omega-700"
          className="object-cover"
          sizes="(min-width: 540px) 428px, 16vw"
          fill
        />
      </Link>
    )}
    <div className="w-2/3 px-2 md:p-5">
      <div className="flex items-center justify-between">
        <div className="space-x-1">
          {tags?.map((tag) => (
            <Tag key={tag.title} slug={tag.slug} className="m-0.5 font-mono text-sm lg:mr-2">
              {tag.title}
            </Tag>
          ))}
        </div>
        {date && (
          <div className="hidden text-omega-500 md:block">
            <Date
              className="block align-middle font-mono text-xs font-bold uppercase"
              date={date}
            />
          </div>
        )}
      </div>
      <Link href={slug.join('/')} aria-label={title}>
        <h6 className="mb-0 mt-2 transition-colors group-hover:text-accent dark:group-hover:text-alpha md:mt-3">
          {title}
        </h6>
      </Link>
    </div>
  </div>
)

export default BlogCardHorizontal
