import React from 'react'
import classNames from 'clsx'
import NextImage from 'next/image'

const Image = (props) => {
  const [isLoaded, setIsLoaded] = React.useState(false)
  const { wrapperClassName, className, animation = 'fade-in', alt, quality = 90, ...rest } = props

  const fx = {
    fadeIn: animation.includes('fade-in'),
    zoomOut: animation.includes('zoom-out'),
    maskRight: animation.includes('mask-right'),
    maskLeft: animation.includes('mask-left'),
    slideInTop: animation.includes('slide-in-top'),
  }

  const onLoadingComplete = () => {
    setIsLoaded(true)
  }

  return (
    <div
      className={classNames(
        'relative overflow-hidden',
        {
          'h-full w-full': rest.fill,
        },
        wrapperClassName
      )}
    >
      <div
        className={classNames(
          'absolute left-0 top-0 z-10 hidden h-full w-[120%] bg-omega-900',
          'origin-bottom skew-x-6 transform-gpu transition-transform duration-700',
          (fx.maskRight || fx.maskLeft) && 'md:block',
          {
            'translate-x-full': isLoaded && fx.maskRight,
            '-translate-x-full': isLoaded && fx.maskLeft,
          }
        )}
      />

      <NextImage
        onLoadingComplete={onLoadingComplete}
        className={classNames(
          'md:transform-gpu md:transition-all md:duration-700',
          !isLoaded && {
            'md:opacity-0': fx.fadeIn,
            'md:scale-150 md:will-change-transform': fx.zoomOut,
            'md:translate-y-20 md:will-change-transform': fx.slideInTop,
          },
          className
        )}
        alt={alt}
        quality={quality}
        {...rest}
      />
    </div>
  )
}

export default Image
