import React from 'react'
import classNames from 'clsx'
import { BiStar, BiGitRepoForked } from 'react-icons/bi'

const DateComponent = (props) => {
  const { stars, forks, name, owner, description, url, language, className } = props

  if (!name) return null

  return (
    <a
      href={url}
      aria-label={name}
      target="_blank"
      rel="noreferrer noopener"
      className={classNames(
        'group prose flex h-full flex-col no-underline',
        'bg-gradient-to-br from-alpha-100 via-alpha to-beta',
        className
      )}
    >
      <div className="p-4 md:p-6">
        <h6 className="text-accent">
          <span className="text-omega-900">{owner}/</span>
          {name}
        </h6>
        <div>{description}</div>
      </div>
      <div
        className={classNames(
          'mt-auto flex justify-between px-4 py-3 font-mono font-bold md:px-6',
          'border-t border-beta bg-white',
          'group-hover:bg-gradient-omega-900 border-b border-b-transparent transition-colors duration-300 group-hover:border-b-omega-800 group-hover:text-white'
        )}
      >
        <div className="flex items-center">{language}</div>
        <div className="flex items-center">
          <BiStar className="mr-1 text-yellow-500" />
          {stars}
        </div>
        <div className="flex items-center">
          <BiGitRepoForked className="mr-1 text-beta" />
          {forks}
        </div>
      </div>
    </a>
  )
}

export default DateComponent
