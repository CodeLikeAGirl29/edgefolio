import React from 'react'
import classNames from 'clsx'

const FormInput = React.forwardRef((props, ref) => {
  const {
    label,
    placeholder,
    id,
    name,
    autoComplete,
    hasError,
    type = 'text',
    inputType,
    ...rest
  } = props

  const tags = {
    text: 'input',
    textarea: 'textarea',
  }

  const Component = tags[type]

  return (
    <>
      {label && (
        <label htmlFor={name} className="block">
          {label}
        </label>
      )}
      <Component
        type={inputType || type}
        ref={ref}
        id={id}
        name={name}
        autoComplete={autoComplete}
        className={classNames(
          'block w-full border-0 py-3 px-4',
          'border-b bg-omega-700/20  placeholder-omega-400',
          hasError
            ? 'border-red-500 focus:border-0 focus:ring-red-500'
            : 'border-accent focus:ring-accent-500'
        )}
        placeholder={placeholder}
        {...rest}
      />
    </>
  )
})

FormInput.displayName = 'FormInput'

export default FormInput
