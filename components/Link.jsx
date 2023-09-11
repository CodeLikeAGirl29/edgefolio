import React from 'react'
import NextLink from 'next/link'

const Link = ({ href, children, ...props }) => {
  const isInternalLink = href && (href.startsWith('/') || href.startsWith('#'))

  return isInternalLink ? (
    <NextLink href={href} {...props}>
      {children}
    </NextLink>
  ) : (
    <a href={href} {...props}>
      {children}
    </a>
  )
}

export default Link
