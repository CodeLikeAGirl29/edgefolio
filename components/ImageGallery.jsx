import React from 'react'
import classNames from 'clsx'
import { Portal } from 'react-portal'
import Image from '@/components/Image'
import {
  IoCloseSharp,
  IoChevronForwardSharp,
  IoChevronBackSharp,
  IoEyeSharp,
} from 'react-icons/io5'
import { CarouselProvider, Slider, Slide, ButtonBack, ButtonNext } from 'pure-react-carousel'
import 'pure-react-carousel/dist/react-carousel.es.css'

const Button = ({ as = 'button', className, children, ...props }) => {
  const Component = as
  return (
    <Component
      className={classNames(
        'bg-omega-900 p-2 text-white shadow-lg hover:text-alpha',
        'hover:bg-black active:bg-alpha active:text-black',
        className
      )}
      {...props}
    >
      {children}
    </Component>
  )
}

const ImageGallery = (props) => {
  const { images } = props
  const portalRef = React.useRef(null)
  const [activeIndex, setActiveIndex] = React.useState(null)
  const nextNode = typeof window !== 'undefined' && document && document.getElementById('__next')

  React.useEffect(() => {
    portalRef.current && portalRef.current.focus()
  }, [activeIndex])

  if (!images || !images.length) return null

  const thumbsToShow = images.length > 4 ? 3 : images.length

  const handleClickOutside = (e) => {
    if (e.currentTarget != e.target) return
    handleClose()
  }

  const handleEsc = (e) => {
    if (e.key !== 'Escape') return
    handleClose()
  }

  const handleClose = () => setActiveIndex(null)

  return (
    <div className="grid grid-cols-4 grid-rows-3 gap-4">
      {images.slice(0, thumbsToShow).map((image, i) => (
        <div
          key={i}
          className={classNames('group relative', {
            'col-span-3 row-span-3': i === 0 && thumbsToShow > 1,
            'col-span-full row-span-full': i === 0 && thumbsToShow === 1,
          })}
        >
          <Image
            src={image.src}
            alt={image.alt}
            priority={i === 0}
            animation="fade-in zoom-out"
            wrapperClassName="aspect-w-16 aspect-h-9"
            className="object-cover"
            sizes={i === 0 ? '(min-width: 1120px) 1120px, 33vw' : '(min-width: 540px) 428px, 8vw'}
            fill
          />

          {thumbsToShow > 1 && (
            <div
              onClick={() => setActiveIndex(i)}
              className={classNames(
                'absolute inset-0 flex cursor-pointer flex-col items-center',
                'opacity-0 backdrop-blur-sm transition-opacity group-hover:opacity-100'
              )}
            >
              <IoEyeSharp className="mt-auto text-3xl invert" />
              <figcaption className="mt-auto w-full">{image.alt}</figcaption>
            </div>
          )}
        </div>
      ))}
      {images.length > thumbsToShow && (
        <div
          onClick={() => setActiveIndex(0)}
          className={classNames(
            'flex cursor-pointer items-center justify-center',
            'border border-transparent bg-omega-800 hover:border-omega-600'
          )}
        >
          <h6 className="m-0 text-omega-300">+{images.length - thumbsToShow}</h6>
        </div>
      )}

      {activeIndex !== null && (
        <Portal node={nextNode}>
          <div
            onClick={handleClickOutside}
            onKeyDown={handleEsc}
            ref={portalRef}
            tabIndex={-1}
            className="fixed inset-0 z-50 flex h-screen w-screen items-center justify-center overflow-auto bg-omega-900/95"
          >
            <CarouselProvider
              tabIndex="-1"
              className="relative w-full"
              currentSlide={activeIndex}
              totalSlides={images.length}
              naturalSlideHeight={45}
              naturalSlideWidth={100}
              lockOnWindowScroll
              infinite
            >
              <Slider>
                {images.map((image, i) => (
                  <Slide key={i} index={i} className="text-center" tag="figure">
                    <Image
                      src={image.src}
                      alt={image.alt}
                      fill
                      className="object-scale-down object-top"
                      animation="fade-in zoom-out"
                      quality={100}
                    />
                    {image.alt && (
                      <figcaption className="absolute bottom-0 left-1/2 -translate-x-1/2 bg-black px-6 py-1 text-white">
                        {image.alt}
                      </figcaption>
                    )}
                  </Slide>
                ))}
              </Slider>

              <Button as={ButtonBack} className="absolute top-1/2 left-2 z-10 -translate-y-1/2">
                <IoChevronBackSharp className="text-4xl" />
              </Button>
              <Button as={ButtonNext} className="absolute top-1/2 right-2 z-10 -translate-y-1/2">
                <IoChevronForwardSharp className="text-4xl" />
              </Button>
            </CarouselProvider>
            <Button className="absolute top-2 right-2 z-10" onClick={handleClose}>
              <IoCloseSharp className="text-4xl" />
              ESC
            </Button>
          </div>
        </Portal>
      )}
    </div>
  )
}

export default ImageGallery
