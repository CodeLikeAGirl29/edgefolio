import React from 'react'
import Link from 'next/link'
import classNames from 'clsx'
import ActiveLink from '@/components/ActiveLink'
import { menu, social } from '../theme.config'
import { BiChevronDown, BiDotsHorizontalRounded } from 'react-icons/bi'

const MenuItem = ({ name, Icon, text, slug, number, isOpen, toggleMenu, ...rest }) => (
  <ActiveLink
    href={slug}
    activeClassName="from-beta to-alpha text-black"
    inActiveClassName="from-omega-900 text-white group md:hover:from-accent-700 md:hover:to-accent"
    className={classNames(
      'h-16 md:h-auto',
      'relative z-20 flex flex-col items-center justify-center md:py-4',
      'bg-gradient-to-tr transition-all duration-300'
    )}
    aria-label={name}
    {...rest}
  >
    <div
      className={classNames(
        'absolute right-full top-0 h-full min-w-max px-4',
        'hidden items-center bg-accent text-sm font-medium text-white md:flex',
        'invisible translate-x-10 opacity-0 transition-all duration-300 group-hover:visible group-hover:translate-x-0 group-hover:opacity-100'
      )}
    >
      {name}
    </div>
    {number && (
      <div className="absolute bottom-2 right-2 hidden h-4 w-4 text-center font-mono text-xs font-bold md:block">
        {number}
      </div>
    )}
    <span className="absolute top-0 right-0 hidden h-full w-1 bg-white/25 opacity-0 transition-opacity group-hover:opacity-100 md:block" />
    {Icon && <Icon className="relative z-20 h-6 w-6" />}
    {text && <div className="relative z-20 h-6 text-lg font-extrabold">{text}</div>}
    <span className="mt-1 text-center text-xs md:hidden">{name}</span>
  </ActiveLink>
)

const SocialLink = ({ url, name, Icon }) => (
  <Link
    href={url}
    className="group block flex-1 text-center"
    rel="noopener noreferrer"
    target="_blank"
    title={name}
  >
    {Icon && (
      <Icon className="mx-auto h-12 w-6 text-white md:text-omega-500 md:group-hover:text-alpha" />
    )}
  </Link>
)

const Menu = () => {
  const [isOpen, setIsOpen] = React.useState(false)

  const toggleMenu = () => setIsOpen((open) => !open)
  const closeMenu = () => setIsOpen(false)

  return (
    <>
      <div
        className={classNames(
          'fixed top-0 left-0 z-10 block w-full animate-fade-in bg-black/90 md:hidden',
          isOpen ? 'h-screen' : 'h-0'
        )}
        onClick={closeMenu}
      />

      <div
        className={classNames(
          'bg-gradient-omega-900 shrink-0 flex-col items-center justify-between md:flex',
          'fixed left-0 top-full z-40 w-full md:w-16',
          'md:sticky md:top-20 md:h-[calc(100vh-theme(space.40))]',
          'transition-transform md:translate-y-0',
          isOpen ? '-translate-y-full' : '-translate-y-16'
        )}
      >
        {menu && (
          <div className="grid w-full grid-cols-4 bg-gradient-to-b from-transparent to-omega-800 md:block">
            {menu &&
              menu.map((item) => <MenuItem {...item} key={`${item.slug}`} onClick={closeMenu} />)}
            <div
              className={classNames(
                'row-start-1 flex h-16 items-center md:hidden',
                isOpen ? 'col-span-4 col-start-1' : 'bg-gradient-omega-900 col-start-4'
              )}
              onClick={toggleMenu}
            >
              <span className="md:none mx-auto block text-7xl text-omega-100">
                {isOpen ? (
                  <BiChevronDown className="animate-grow-in" />
                ) : (
                  <BiDotsHorizontalRounded className="animate-grow-in" />
                )}
              </span>
            </div>
          </div>
        )}

        {social && (
          <div className="flex w-full flex-wrap bg-accent md:block md:bg-omega-800">
            {social.map((item, i) => (
              <SocialLink key={`${i}-social`} {...item} />
            ))}
          </div>
        )}
      </div>
    </>
  )
}

export default Menu
