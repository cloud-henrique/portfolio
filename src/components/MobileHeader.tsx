'use client'

import Link from 'next/link'
import { Moon, Sun } from 'react-feather'
import { links, Switch } from '@/components'

interface MobileHeaderProps {
  open: boolean
  isDarkTheme: boolean
  toggleTheme: () => void
  setOpen: (open: boolean) => void
}

export function MobileHeader({ open, isDarkTheme, toggleTheme, setOpen }: MobileHeaderProps) {
  return (
    <header
      className={`fixed right-0 top-0 z-50 flex h-screen w-3/4 flex-col bg-primary-800 py-14 duration-300 ease-in-out dark:bg-gray-950 md:hidden ${
        open ? 'translate-x-0' : 'translate-x-full'
      }`}
    >
      <nav className='flex flex-col w-full gap-6'>
        {links.map(link => (
          <Link key={link.href} href={link.href} onClick={() => setOpen(false)}>
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
