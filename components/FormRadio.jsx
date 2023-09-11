import React from 'react'
import FormCheckbox from '@/components/FormCheckbox'

const FormRadio = React.forwardRef((props, ref) => {
  return <FormCheckbox {...props} ref={ref} type="radio" />
})

FormRadio.displayName = 'FormRadio'

export default FormRadio
