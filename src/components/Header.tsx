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
  { title: 'Projetos', href: '/#projects' },
  { title: 'Experiências', href: '/#experiences' },
  { title: 'Contato', href: '/#contact' },
]

export function Header({ toggleTheme, isDarkTheme }: HeaderProps) {
  return (
    <header className='hidden md:flex bg-primary-500 dark:bg-primary-700 h-20 items-center px-6 sm:px-12 border-b border-neutral-200 dark:border-0 w-full'>
      <nav className='flex items-center gap-8 self-center w-full'>
        <ul className='flex items-center gap-8 flex-1 w-full justify-center'>
          {links.map(link => (
            <li key={link.href} className='font-medium text-lg text-gray-50'>
              <Link scroll={false} href={link.href}>
                {link.title}
              </Link>
            </li>
          ))}
        </ul>

        <span className='flex gap-2 items-center'>
          <Sun className='h-6 w-6 text-gray-50' />
          <Switch checked={isDarkTheme} onChange={toggleTheme} />
          <Moon className='h-6 w-6 text-gray-50' />
        </span>
      </nav>
    </header>
  )
}
