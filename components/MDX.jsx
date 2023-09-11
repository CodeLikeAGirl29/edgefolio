import React from 'react'
import dynamic from 'next/dynamic'
import Icon from '@/components/Icon'
import MDXHeading from '@/components/MDXHeading'
import MDXLink from '@/components/MDXLink'
import MDXButton from '@/components/MDXButton'
import MDXWide from '@/components/MDXWide'
import MDXImage from '@/components/MDXImage'
import Sep from '@/components/Sep'
import TipJar from '@/components/TipJar'
import Newsletter from '@/components/Newsletter'
import Typewriter from '@/components/Typewriter'
import MDXPageTitle from '@/components/MDXPageTitle'

const MDXYoutube = dynamic(() => import('@/components/MDXYoutube'))

const MDX = {
  a: MDXLink,
  Button: MDXButton,
  Wide: MDXWide,
  img: MDXImage,
  Youtube: MDXYoutube,
  PageTitle: MDXPageTitle,
  Icon,
  Typewriter,
  TipJar,
  Newsletter,
  Sep,
  h1: (props) => <MDXHeading as="h1" {...props} />,
  h2: (props) => <MDXHeading as="h2" {...props} />,
  h3: (props) => <MDXHeading as="h3" {...props} />,
}

export default MDX
