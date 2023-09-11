import Button from '@/components/Button'
import Link from '@/components/Link'

const MDXButton = (props) => (
  <Link {...props} passHref legacyBehavior>
    <Button {...props} />
  </Link>
)

export default MDXButton
