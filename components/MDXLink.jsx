import classNames from 'clsx'
import Link from '@/components/Link'

const MDXLink = ({ className, children, ...props }) => (
  <Link className={classNames('border-b border-alpha hover:border-b-2', className)} {...props}>
    {children}
  </Link>
)

export default MDXLink
