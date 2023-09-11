import React from 'react'
import classNames from 'clsx'

const Sep = (props) => {
  const { className, size, line, ...rest } = props

  return (
    <div
      className={classNames(
        {
          'h-px w-full bg-gradient-to-r from-accent via-beta to-alpha': line === true,
          'my-3 md:my-6': size == 6,
          'my-6 md:my-12': size == 12,
          'my-12 md:my-24': size == 24,
        },
        className
      )}
      {...rest}
    />
  )
}

export default Sep
