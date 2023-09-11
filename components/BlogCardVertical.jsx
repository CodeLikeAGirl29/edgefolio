import React from 'react'
import Link from 'next/link'
import classNames from 'clsx'
import Image from '@/components/Image'
import Tag from '@/components/Tag'
import Date from '@/components/Date'
import { IoCalendarOutline } from 'react-icons/io5'

const BlogCardVertical = ({ className, title, images, slug, description, date, tags }) => (
  <div
    className={classNames(
      'group prose prose-zinc block flex flex-col',
      'from-omega-900 via-omega-900 to-omega-800 dark:prose-invert dark:sm:bg-gradient-to-b dark:sm:shadow-md',
      className
    )}
  >
    {images?.[0] && (
      <Link
        href={slug.join('/')}
        aria-label={title}
        className="not-prose block h-48 w-full overflow-hidden md:h-64"
      >
        <Image
          src={images[0].src}
          alt={images[0].alt || title}
          animation="fade-in zoom-out"
          wrapperClassName="transition-transform group-hover:scale-105 duration-300 ease-out before:bg-omega-700"
          sizes="(min-width: 768px) 428px, 100vw"
          className="object-cover"
          fill
        />
      </Link>
    )}
    <div className="flex grow flex-col py-4 sm:p-6">
      <div className="space-x-1">
        {tags?.map((tag) => (
          <Tag key={tag.title} slug={tag.slug} className="m-0.5 font-mono text-sm lg:mr-2">
            {tag.title}
          </Tag>
        ))}
      </div>
      <Link href={slug.join('/')} aria-label={title}>
        <h5 className="my-4 transition-colors group-hover:text-accent dark:group-hover:text-alpha">
          {title}
        </h5>
      </Link>
      <small className="mb-4 text-omega-400">{description}</small>
      {date && (
        <div className="mt-auto text-omega-500">
          <IoCalendarOutline className="mr-2 inline h-6 w-6" />
          <Date className="inline align-middle font-mono font-bold uppercase" date={date} />
        </div>
      )}
    </div>
  </div>
)

export default BlogCardVertical
