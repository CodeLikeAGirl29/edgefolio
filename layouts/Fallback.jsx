import React from 'react'
import Loader from '@/components/Loader'

const Layout = () => (
  <div className="mx-auto my-auto p-4 md:p-10 lg:p-20">
    <div className="prose dark:prose-invert">
      <Loader text="Loading" />
    </div>
  </div>
)

export default Layout
