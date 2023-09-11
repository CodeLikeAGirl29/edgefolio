import classNames from 'clsx'
import { HiOutlineColorSwatch } from 'react-icons/hi'

const themes = [
  {
    name: 'lime',
    switchBg: 'from-lime-500 to-green-500',
  },
  {
    name: 'amber',
    switchBg: 'from-amber-500 to-red-500',
  },
  {
    name: 'rose',
    switchBg: 'from-rose-500 to-purple-500',
  },
  {
    name: 'cyan',
    switchBg: 'from-cyan-500 to-indigo-500',
  },
]

const ThemeSwitcher = ({ setTheme }) => {
  return (
    <div className="group fixed left-2 top-1/2 z-50 hidden -translate-y-1/2 space-y-1 lg:left-8 lg:block">
      <HiOutlineColorSwatch className="h-5 w-5 text-omega-500 group-hover:text-omega-100" />
      {themes.map(({ name, switchBg }) => (
        <div
          key={name}
          className={classNames(
            switchBg,
            'h-5 w-5 origin-right cursor-pointer bg-gradient-to-br transition-all hover:scale-x-150'
          )}
          onClick={() => setTheme(name)}
        />
      ))}
    </div>
  )
}

export default ThemeSwitcher
