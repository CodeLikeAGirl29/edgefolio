import classNames from 'clsx'
import React from 'react'
import LoadingDots from '@/components/LoadingDots'

const Button = React.forwardRef((props, ref) => {
  const {
    variant = 'white',
    size = 'md',
    disabled = false,
    className,
    as = 'a',
    children,
    ...rest
  } = props

  const Component = as

  return (
    <Component
      ref={ref}
      className={classNames(
        'relative inline-flex items-center justify-center',
        'leading-normal no-underline',
        'group cursor-pointer select-none focus:outline-none',
        'peer md:peer-even:ml-6',
        disabled && 'pointer-events-none grayscale',
        className
      )}
      disabled={disabled}
      {...rest}
    >
      <div
        className={classNames(
          'z-10 h-full w-full border-4 border-transparent group-active:border-alpha',
          'flex transform-gpu transition-transform',
          'not-prose font-mono',
          {
            'py-2 px-4 text-sm': size === 'xs',
            'py-3 px-6 text-sm': size === 'sm',
            'py-4 px-8 text-base': size === 'md',
            'py-5 px-10 text-lg': size === 'lg',
            'py-6 px-12 text-xl': size === 'xl',
            'hover:translate-x-1 hover:translate-y-1': size === 'xs',
            'hover:translate-x-2 hover:translate-y-2': size !== 'xs',
            'bg-white text-black': variant === 'white',
            'bg-black text-white': variant === 'black',
          }
        )}
      >
        <span className={classNames('mx-auto', { invisible: disabled })}>{children}</span>
        {disabled && <LoadingDots className="absolute left-0 top-0 h-full w-full" />}
      </div>
      <div
        className={classNames(
          'absolute h-full w-full',
          'bg-gradient-to-r from-alpha via-alpha-300 to-beta',
          {
            'top-1 left-1': size === 'xs',
            'top-2 left-2': size !== 'xs',
          }
        )}
      />
    </Component>
  )
})

Button.displayName = 'Button'

export default Button
