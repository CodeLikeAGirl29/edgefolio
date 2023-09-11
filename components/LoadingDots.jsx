import React from 'react'
import classNames from 'clsx'

const LoadingDots = (props) => {
  const { className, ...rest } = props
  return (
    <div
      className={classNames(
        'flex items-center justify-center space-x-2 text-center leading-7',
        className
      )}
      {...rest}
    >
      <span className="h-2 w-2 animate-ping rounded-full bg-omega-500" />
      <span
        className="h-2 w-2 animate-ping rounded-full bg-omega-500"
        style={{ animationDelay: '0.2s' }}
      />
      <span
        className="h-2 w-2 animate-ping rounded-full bg-omega-500"
        style={{ animationDelay: '0.4s' }}
      />
    </div>
  )
}

export default LoadingDots
