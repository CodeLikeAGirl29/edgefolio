import React from 'react'
import ContentRenderer from '@/components/ContentRenderer'

const Layout = ({ content }) => (
  <div className="self-start p-4 md:p-10 lg:p-20">
    <div className="prose dark:prose-invert">
      {/* Main content of the markdown file */}
      <ContentRenderer source={content} />
    </div>
  </div>
)

export default Layout
