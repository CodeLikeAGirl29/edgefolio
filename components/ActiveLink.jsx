import React from 'react'
import { useRouter } from 'next/router'
import classNames from 'clsx'
import Link from 'next/link'

const ActiveLink = ({ children, className, activeClassName, inActiveClassName, ...props }) => {
  const { asPath } = useRouter()

  const dynamicClassName = React.useMemo(
    () => classNames(className, asPath === props.href ? activeClassName : inActiveClassName),
    [asPath, props.href, className, activeClassName, inActiveClassName]
  )

  return (
    <Link className={dynamicClassName} {...props}>
      {children}
    </Link>
  )
}

export default ActiveLink
