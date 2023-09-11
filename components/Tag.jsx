import React from 'react'
import classNames from 'clsx'
import Link from 'next/link'

const Tag = (props) => {
  const { children, className, slug, ...rest } = props

  const isLinked = Array.isArray(slug)
  const Component = isLinked ? Link : 'span'
  const href = isLinked ? slug.join('/') : undefined

  return (
    <Component
      className={classNames(
        'inline-block select-none px-3 py-1 uppercase no-underline',
        'bg-beta/10 text-beta',
        isLinked && 'hover:bg-beta/20',
        className
      )}
      href={href}
      {...rest}
    >
      {children}
    </Component>
  )
}

export default Tag
