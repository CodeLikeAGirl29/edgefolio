import { useInView } from 'react-intersection-observer'
import classNames from 'clsx'

const Reveal = (props) => {
  const {
    className,
    animation = 'fade-in',
    threshold = 0.3,
    triggerOnce = true,
    delay = undefined,
    duration = undefined,
    timeout = undefined,
    style = {},
    children,
    ...rest
  } = props

  const fx = {
    fadeIn: animation.includes('fade-in'),
    slideInRight: animation.includes('slide-in-right'),
    slideInLeft: animation.includes('slide-in-left'),
    slideInTop: animation.includes('slide-in-top'),
    slideInBottom: animation.includes('slide-in-bottom'),
    zoomIn: animation.includes('zoom-in'),
    scaleX: animation.includes('scale-x'),
  }

  const [ref, inView] = useInView({
    triggerOnce,
    threshold,
    delay: timeout,
  })

  const rootClassName = classNames(
    'md:transition-all',
    {
      'md:origin-left': fx.scaleX,
      'md:duration-1000': duration === undefined,
    },
    !inView && {
      'md:opacity-0': fx.fadeIn,
      'md:-translate-x-10': fx.slideInRight,
      'md:translate-x-10': fx.slideInLeft,
      'md:translate-y-5': fx.slideInTop,
      'md:-translate-y-5': fx.slideInBottom,
      'md:scale-90': fx.zoomIn,
      'md:scale-x-0': fx.scaleX,
    },
    className
  )

  return (
    <div
      ref={ref}
      className={rootClassName}
      style={{
        transitionDelay: delay ? `${delay}ms` : undefined,
        transitionDuration: duration ? `${duration}ms` : undefined,
        ...style,
      }}
      {...rest}
    >
      {children}
    </div>
  )
}

export default Reveal
