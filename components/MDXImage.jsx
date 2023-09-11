import Image from 'next/image'

const MDXImage = (props) => (
  <figure className="mx-auto" style={{ maxWidth: `${props.width}px` }}>
    <Image className="mx-auto" alt={props.alt} {...props} />
    {props.alt && <figcaption className="text-center italic">{props.alt}</figcaption>}
  </figure>
)

export default MDXImage
