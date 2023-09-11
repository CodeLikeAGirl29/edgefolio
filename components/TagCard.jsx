import classNames from 'clsx'
import Link from 'next/link'

const TagCard = (tag) => (
  <Link
    href={tag.slug.join('/')}
    className={classNames(
      'bg-gradient-omega-900 group prose prose-zinc dark:prose-invert',
      'border-l border-transparent transition-colors hover:border-omega-500'
    )}
  >
    <div className="flex h-full items-stretch justify-between">
      <div className="flex items-center p-2 md:p-4">
        <small className="text-sm">{tag.title}</small>
      </div>
      <div
        className={classNames(
          'border-l border-beta',
          'flex w-14 items-center justify-center text-center',
          'from-alpha-100 via-alpha to-beta dark:bg-omega-700',
          'transition-all duration-300 group-hover:bg-gradient-to-br group-hover:text-omega-900'
        )}
      >
        <small className="text-sm font-bold">{tag.collection?.totalRecords}</small>
      </div>
    </div>
  </Link>
)

export default TagCard
