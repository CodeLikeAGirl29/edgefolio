import React from 'react'
import classNames from 'clsx'
import { useForm, FormProvider } from 'react-hook-form'
import ContentRenderer from '@/components/ContentRenderer'
import Reveal from '@/components/Reveal'
import FormInput from '@/components/FormInput'
import FormTextarea from '@/components/FormTextarea'
import FormSelect from '@/components/FormSelect'
import FormCheckbox from '@/components/FormCheckbox'
import FormRadio from '@/components/FormRadio'
import Button from '@/components/Button'
import { SlCheck } from 'react-icons/sl'
import { config } from '../theme.config'

const { inputs } = config.contactForm || {}

const FormComponent = {
  text: FormInput,
  textarea: FormTextarea,
  select: FormSelect,
  radio: FormRadio,
  checkbox: FormCheckbox,
}

const ErrorMessage = ({ errors, name }) =>
  errors[name] ? (
    <div className="mb-4 block bg-red-500/5 px-4 py-2 text-red-500">{errors[name].message}</div>
  ) : null

const SuccessMessage = () => (
  <Reveal animation="fade-in">
    <div className="absolute inset-0 z-20 flex h-full w-full items-center justify-center bg-omega-800/95">
      <div className="max-w-md text-center">
        <SlCheck className="mx-auto text-5xl text-alpha" />
        <h5>Thank you for contacting me.</h5>
        <p>I will get back to you as soon as possible.</p>
      </div>
    </div>
  </Reveal>
)

const Contact01 = ({ main = {} }) => {
  const methods = useForm()
  const {
    register,
    formState: { errors, isValidating, isSubmitting, isSubmitSuccessful },
    handleSubmit,
    setError,
    clearErrors,
  } = methods

  const onSubmit = async (data) => {
    try {
      const res = await fetch(`/api/contact-form`, {
        method: 'POST',
        body: JSON.stringify(data),
        headers: new Headers({
          'Content-Type': 'application/json',
          credentials: 'same-origin',
        }),
      })
      if (res.status === 201) {
        return true
      }
      const json = await res.json()
      if (json.error) {
        throw json.error
      }
    } catch (error) {
      setError('service', { type: 'serviceSideError', message: error })
    }
  }

  React.useEffect(() => {
    if (errors.service && isValidating) {
      clearErrors('service')
    }
  }, [isValidating, errors.service, clearErrors])

  return (
    <div className="my-auto p-3 md:p-6 lg:p-12">
      <div className="prose prose-invert items-start lg:flex">
        <Reveal
          animation="fade-in slide-in-right"
          className="prose prose-invert basis-1/3 lg:mr-14"
        >
          <ContentRenderer source={main} />
        </Reveal>
        <Reveal
          animation="fade-in zoom-in"
          className="md:with-back-plate max-w-3xl border border-omega-700 md:before:bg-omega-700"
        >
          <FormProvider {...methods}>
            <form onSubmit={handleSubmit(onSubmit)}>
              <div className="relative overflow-hidden shadow">
                {isSubmitSuccessful && <SuccessMessage />}
                <div className="bg-gradient-omega-900">
                  {inputs?.map(({ legend, columns, fields }, i) => (
                    <fieldset key={i} className="border-b border-dashed border-omega-700">
                      <div className="bg-omega-800 p-5">
                        <legend className="m-0 p-0">{legend}</legend>
                      </div>
                      <div
                        className={classNames('grid gap-2 p-5', {
                          'md:grid-cols-2': columns === 2,
                          'md:grid-cols-3': columns === 3,
                        })}
                      >
                        {fields.map((input, j) => {
                          const Component = FormComponent[input.type]
                          return input.type && Component ? (
                            <div key={(input.id || input.name) + j} className="flex items-center">
                              <Component {...input} {...register(input.id || input.name)} />
                            </div>
                          ) : null
                        })}
                      </div>
                    </fieldset>
                  ))}
                </div>
                <div className="bg-omega-900 px-4 pt-6 pb-8 text-left md:px-8">
                  <ErrorMessage errors={errors} name="service" />
                  <Button
                    as="button"
                    type="submit"
                    size="sm"
                    className="w-full sm:w-1/3"
                    disabled={isSubmitting}
                  >
                    Submit
                  </Button>
                </div>
              </div>
            </form>
          </FormProvider>
        </Reveal>
      </div>
    </div>
  )
}
export default Contact01
