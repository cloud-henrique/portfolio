'use client'

import Link from 'next/link'
import { Moon, Sun } from 'react-feather'
import { Switch } from '@/components'
import { profile } from '@/data/profile'

interface HeaderProps {
  toggleTheme: () => void
  isDarkTheme: boolean
}

export const links = [
  { title: 'Sobre', href: '/#about' },
  { title: 'Stack', href: '/#stack' },
  { title: 'Cases', href: '/#cases' },
  { title: 'Experiência', href: '/#experience' },
  { title: 'Contato', href: '/#contact' },
]

export function Header({ toggleTheme, isDarkTheme }: HeaderProps) {
  return (
    <header className='hidden h-20 w-full items-center border-b border-primary-700/10 bg-offwhite/95 px-6 backdrop-blur dark:border-white/10 dark:bg-graphite/95 sm:px-12 md:flex'>
      <nav className='mx-auto flex w-full max-w-7xl items-center gap-4 self-center lg:gap-8'>
        <Link
          href='/#hero'
          aria-label='Ir para o início'
          className='group flex items-center gap-3 text-gray-950 transition-colors hover:text-primary-800 dark:text-gray-50 dark:hover:text-primary-200'
        >
          <span className='grid h-9 w-9 place-items-center rounded-md border border-primary-700/20 bg-primary-700/10 text-sm font-bold text-primary-800 dark:border-primary-300/25 dark:bg-primary-300/10 dark:text-primary-200'>
            CH
          </span>
          <span className='hidden text-sm font-semibold lg:inline'>{profile.displayName}</span>
        </Link>

        <ul className='flex w-full flex-1 items-center justify-center gap-5 lg:gap-8'>
          {links.map(link => (
            <li
              key={link.href}
              className='text-sm font-medium text-gray-800 transition hover:text-primary-800 dark:text-gray-200 dark:hover:text-primary-200'
            >
              <Link scroll={true} href={link.href}>
                {link.title}
              </Link>
            </li>
          ))}
        </ul>

        <span className='flex items-center gap-2'>
          <Sun className='h-5 w-5 text-primary-800 dark:text-primary-200' />
          <Switch checked={isDarkTheme} onChange={toggleTheme} />
          <Moon className='h-5 w-5 text-primary-800 dark:text-primary-200' />
        </span>
      </nav>
    </header>
  )
}
