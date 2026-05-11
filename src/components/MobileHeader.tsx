'use client'

import Link from 'next/link'
import { Moon, Sun } from 'react-feather'
import { links, Switch } from '@/components'
import { profile } from '@/data/profile'

interface MobileHeaderProps {
  open: boolean
  isDarkTheme: boolean
  toggleTheme: () => void
  setOpen: (open: boolean) => void
}

export function MobileHeader({ open, isDarkTheme, toggleTheme, setOpen }: MobileHeaderProps) {
  return (
    <header
      className={`fixed right-0 top-0 z-50 flex h-dvh w-[min(82vw,22rem)] flex-col bg-primary-800 px-6 py-14 duration-300 ease-in-out dark:bg-graphite md:hidden ${
        open ? 'translate-x-0' : 'translate-x-full'
      }`}
    >
      <Link href='/#hero' onClick={() => setOpen(false)} className='mb-10 flex items-center gap-3 text-gray-50'>
        <span className='grid h-9 w-9 place-items-center rounded-md border border-white/20 bg-white/10 text-sm font-bold'>
          CH
        </span>
        <span className='text-sm font-semibold'>{profile.displayName}</span>
      </Link>

      <nav className='flex w-full flex-col gap-3'>
        {links.map(link => (
          <Link
            key={link.href}
            href={link.href}
            onClick={() => setOpen(false)}
            className='rounded-md py-3 text-gray-50'
          >
            <p className='text-xl font-medium'>{link.title}</p>
          </Link>
        ))}
      </nav>

      <span className='mt-auto flex items-center gap-2 border-t border-white/15 pt-6'>
        <Sun className='h-6 w-6 text-gray-50' />
        <Switch checked={isDarkTheme} onChange={toggleTheme} />
        <Moon className='h-6 w-6 text-gray-50' />
      </span>
    </header>
  )
}
