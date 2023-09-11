import React from 'react'
import { useForm } from 'react-hook-form'
import FormInput from '@/components/FormInput'
import Icon from '@/components/Icon'
import Button from '@/components/Button'
import { IoClose } from 'react-icons/io5'

const IntroMessage = () => (
  <div className="prose dark:prose-invert">
    <h3>
      <em>Stay Tuned</em>
    </h3>
    <h6>Want to become a Next.js pro?</h6>
    <small>
      The best articles, links and news related to web development delivered once a week to your
      inbox.
    </small>
  </div>
)

const ErrorMessage = ({ errors, name }) =>
  errors[name] ? (
    <div className="block bg-red-500/5 px-4 py-1 text-xs text-red-500">{errors[name].message}</div>
  ) : null

const SuccessMessage = ({ handleReset }) => (
  <div className="my-6 mx-auto flex max-w-md justify-between bg-omega-800 p-3">
    <span className="text-alpha">Please check your inbox and confirm your email.</span>
    <button onClick={() => handleReset()} className="h-5 w-5 hover:bg-omega-900">
      <IoClose className="mx-auto h-4 w-4 text-omega-500" />
    </button>
  </div>
)

const Badge = () => (
  <div>
    <a
      className="group h-6 text-omega-400 no-underline"
      target="_blank"
      rel="noreferrer"
      href="https://convertkit.com?lmref=CeGsMw"
    >
      <span className="text-xs">BUILT WITH</span>
      <Icon
        src="/icons/convertkit.svg"
        className="ml-2 mb-1 inline h-6 w-24 align-middle group-hover:text-[#FB6970]"
      />
    </a>
  </div>
)

const Newsletter = ({ className }) => {
  const {
    register,
    formState: { errors, isValidating, isSubmitting, isSubmitSuccessful },
    handleSubmit,
    setError,
    clearErrors,
    reset,
  } = useForm()

  const onSubmit = async (data) => {
    try {
      const res = await fetch(`/api/subscribe`, {
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
    <div className={className}>
      <IntroMessage />
      {isSubmitSuccessful ? (
        <SuccessMessage handleReset={reset} />
      ) : (
        <form
          className="relative mx-auto my-6 flex items-start justify-between"
          onSubmit={handleSubmit(onSubmit)}
        >
          <div className="mr-3 inline-block grow">
            <FormInput
              disabled={isSubmitting}
              type="text"
              name="email"
              placeholder="Johndoe@example.com"
              aria-label="email address"
              hasError={errors.email || errors.service}
              {...register('email', {
                required: {
                  value: true,
                  message: 'Email is required.',
                },
                pattern: {
                  value: /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/i,
                  message: 'Email is invalid.',
                },
              })}
            />
            <div className="absolute bottom-full left-0 z-10">
              <ErrorMessage errors={errors} name="email" />
              <ErrorMessage errors={errors} name="service" />
            </div>
          </div>
          <Button as="button" type="submit" size="xs" disabled={isSubmitting}>
            Subscribe
          </Button>
        </form>
      )}
      <Badge />
    </div>
  )
}

export default Newsletter
