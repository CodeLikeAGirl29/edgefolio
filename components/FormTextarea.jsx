import React from 'react'
import FormInput from '@/components/FormInput'

const FormTextarea = React.forwardRef((props, ref) => {
  return <FormInput {...props} ref={ref} type="textarea" />
})

FormTextarea.displayName = 'FormTextarea'

export default FormTextarea
