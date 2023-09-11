import React from 'react'
import { useFormContext } from 'react-hook-form'

const FormCheckbox = React.forwardRef((props, ref) => {
  const { id, label, value, type = 'checkbox', name } = props
  const { setValue } = useFormContext()

  const handleChange = (e) => {
    const { value, checked } = e.target
    setValue(e.target.name, value ? value : checked)
  }

  return (
    <>
      <input
        ref={ref}
        id={id}
        name={name}
        type={type}
        value={value}
        className="h-6 w-6 border-omega-300 text-accent-600 focus:ring-accent-500"
        onChange={handleChange}
      />
      <label htmlFor={id} className="ml-3 block">
        {label}
      </label>
    </>
  )
})

FormCheckbox.displayName = 'FormCheckbox'

export default FormCheckbox
