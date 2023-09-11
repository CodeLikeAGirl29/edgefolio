import React from 'react'
import classNames from 'clsx'

const FormSelect = React.forwardRef((props, ref) => {
  const { label, name, autoComplete, hasError, ...rest } = props

  return (
    <>
      {label && (
        <label htmlFor={name} className="block">
          {label}
        </label>
      )}
      <select
        ref={ref}
        id={name}
        name={name}
        autoComplete={autoComplete}
        className={classNames(
          'block w-full border-0 py-3 px-4',
          'border-b bg-omega-700/20  placeholder-omega-400',
          hasError
            ? 'border-red-500 focus:border-0 focus:ring-red-500'
            : 'border-accent focus:ring-accent-500'
        )}
        {...rest}
      >
        {props.options.map(({ label, ...rest }, i) => (
          <option className="text-black" key={i} {...rest}>
            {label}
          </option>
        ))}
      </select>
    </>
  )
})

FormSelect.displayName = 'FormSelect'

export default FormSelect
