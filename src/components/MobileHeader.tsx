/* eslint-disable max-len */
import Link from 'next/link'
import { Moon, Sun } from 'react-feather'

import { Switch, links } from 'components'

interface MobileHeaderProps {
  open: boolean
  isDarkTheme: boolean
  toggleTheme: () => void
}

export function MobileHeader({ open, isDarkTheme, toggleTheme }: MobileHeaderProps) {
  return (
    <header
      className={`flex flex-col md:hidden py-14 bg-primary-500 dark:bg-primary-700 z-10 h-screen fixed ease-in-out duration-300 w-3/4 right-0 top-0 ${
        open ? 'translate-x-0' : 'translate-x-full'
      }`}
    >
      <nav className='flex flex-col w-full gap-6'>
        {links.map(link => (
          <Link key={link.href} href={link.href}>
            <p className='font-medium text-xl text-gray-50 py-3 px-6'>{link.title}</p>
          </Link>
        ))}
      </nav>

      <span className='flex gap-2 items-center p-6'>
        <Sun className='h-6 w-6 text-gray-50' />
        <Switch checked={isDarkTheme} onChange={toggleTheme} />
        <Moon className='h-6 w-6 text-gray-50' />
      </span>
    </header>
  )
}
