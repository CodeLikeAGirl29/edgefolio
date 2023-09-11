import React from 'react'
import classNames from 'clsx'
import Head from 'next/head'
import Button from '@/components/Button'
import { BiCoffee } from 'react-icons/bi'
import { config } from '../theme.config'

const { tipUrl } = config.convertKit || {}

const TipJar = (props) => {
  const { className, ...rest } = props

  React.useEffect(() => {
    if (!tipUrl) return

    const scriptSrc = 'https://productive-blogging.ck.page/commerce.js'
    const scriptSelector = `script[src^="${scriptSrc}"`
    const iframeSelector = `iframe[src^="${tipUrl}"`

    const loadScript = () => {
      window.removeEventListener('scroll', loadScript)
      const script = document.createElement('script')
      script.src = scriptSrc
      script.defer = true
      script.onload = (e) => {
        document.querySelector(iframeSelector)?.classList.add('bg-omega-800/90')
      }
      document.body.appendChild(script)
    }

    window.addEventListener('scroll', loadScript)

    return () => {
      window.removeEventListener('scroll', loadScript)
      document.querySelector(scriptSelector)?.remove()
      document.querySelector(iframeSelector)?.remove()
    }
  }, [])

  return (
    <div
      className={classNames(
        'my-8 flex flex-wrap items-center justify-around p-3 px-4',
        'bg-gradient-to-r from-alpha-100 via-alpha to-beta',
        className
      )}
      {...rest}
    >
      <Head>
        <link rel="preconnect" href="https://convertkit.com" />
        <link rel="dns-prefetch" href="https://convertkit.com" />
        <link rel="preconnect" href="https://stripe.com" />
        <link rel="dns-prefetch" href="https://stripe.com" />
      </Head>
      <p className="my-2 text-black md:m-0">
        Hi there! <strong className="text-black">Want to support my work?</strong>
      </p>
      <BiCoffee className="mx-4 ml-auto inline hidden text-5xl text-omega-800 md:block" />
      <div>
        <Button size="xs" className="font-bold" data-commerce href={tipUrl}>
          Buy me a coffee
        </Button>
      </div>
    </div>
  )
}

export default TipJar
