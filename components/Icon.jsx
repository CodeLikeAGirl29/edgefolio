import SVG from 'react-inlinesvg'

const Icon = ({ source, src, width = 28, ...props }) =>
  source || src ? <SVG src={source || src} {...props} width={width} /> : null

export default Icon
