import classNames from 'clsx'

const MDXWide = ({ children, className, ...props }) => (
  <div
    className={classNames(
      'my-8 overflow-hidden',
      'lg:-mx-[6vw] lg:w-[calc(100%+12vw)]',
      'prose-figure:my-0 prose-pre:my-[0_!important] prose-img:my-0',
      className
    )}
    {...props}
  >
    {children}
  </div>
)

export default MDXWide
