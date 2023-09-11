import classNames from 'clsx'
import { useInView } from 'react-intersection-observer'
import LiteYouTubeEmbed from 'react-lite-youtube-embed'

const MDXYoutube = ({ id, ...props }) => {
  const [inViewRef, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  return (
    <div className="bg-omega-800" ref={inViewRef}>
      {inView && (
        <LiteYouTubeEmbed
          id={id}
          poster="maxresdefault"
          activatedClass="cursor-none before:hidden [--yt-btn-opacity:0]"
          iframeClass="w-full h-full absolute top-0 left-0"
          playerClass={classNames(
            'absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2',
            'w-24 h-16 z-20 bg-red-600 transition-transform group-hover:scale-110',
            'opacity-[var(--yt-btn-opacity,1)]',
            'before:content-["_"]',
            'before:absolute before:top-1/2 before:left-1/2 before:-translate-x-1/2 before:-translate-y-1/2',
            'before:border-solid before:border-t-[1em] before:border-b-[1em] before:border-l-[2em] before:border-transparent before:border-l-white'
          )}
          wrapperClass={classNames(
            'bg-black relative block bg-center bg-cover cursor-pointer group',
            'after:content-["_"] after:block after:pb-[var(--aspect-ratio)]',
            'before:content-["_"] before:absolute before:top-0 before:left-0 before:h-full before:w-full before:z-10',
            'before:bg-omega-900 before:opacity-0 hover:before:opacity-50',
            'before:transition-opacity'
          )}
          {...props}
        />
      )}
    </div>
  )
}

export default MDXYoutube
