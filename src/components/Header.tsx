'use client'

import Link from 'next/link'
import { Moon, Sun } from 'react-feather'
import { Switch } from '@/components'

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
    <header className='hidden md:flex h-20 w-full items-center border-b border-primary-700/10 bg-offwhite/95 px-6 backdrop-blur dark:border-white/10 dark:bg-graphite/95 sm:px-12'>
      <nav className='flex items-center gap-8 self-center w-full'>
        <ul className='flex items-center gap-8 flex-1 w-full justify-center'>
          {links.map(link => (
            <li
              key={link.href}
              className='text-base font-medium text-gray-800 transition hover:text-primary-800 dark:text-gray-200 dark:hover:text-primary-200'
            >
              <Link scroll={true} href={link.href}>
                {link.title}
              </Link>
            </li>
          ))}
        </ul>

        <span className='flex gap-2 items-center'>
          <Sun className='h-6 w-6 text-primary-800 dark:text-primary-200' />
          <Switch checked={isDarkTheme} onChange={toggleTheme} />
          <Moon className='h-6 w-6 text-primary-800 dark:text-primary-200' />
        </span>
      </nav>
    </header>
  )
}
