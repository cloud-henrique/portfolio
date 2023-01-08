/* eslint-disable max-len */
import Link from 'next/link'
import Image from 'next/image'
import { Moon, Sun } from 'react-feather'

import { Switch } from 'components'

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
    <header className='hidden md:flex bg-neutral-100 dark:bg-black h-20 items-center justify-between px-6 sm:px-12 border-b border-neutral-200 dark:border-0 w-full'>
      <div className='flex items-center gap-2'>
        <Image
          alt='Logo Pulsatrix Apps'
          src={isDarkTheme ? '/logo-green.svg' : '/logo-purple.svg'}
          width={56}
          height={56}
        />
        <p className='text-3xl font-bold text-primary-500 dark:text-secondary-500'>Pulsatrix Apps</p>
      </div>

      <nav className='flex items-center gap-8'>
        <ul className='flex items-center gap-8'>
          {links.map(link => (
            <li
              key={link.href}
              className='font-medium text-lg text-primary-500 hover:text-primary-700 dark:text-secondary-500 dark:hover:text-secondary-700'
            >
              <Link scroll={false} href={link.href}>
                {link.title}
              </Link>
            </li>
          ))}
        </ul>

        <span className='flex gap-2 items-center'>
          <Sun className='h-6 w-6 text-gray-900 dark:text-gray-100' />
          <Switch checked={isDarkTheme} onChange={toggleTheme} />
          <Moon className='h-6 w-6 text-gray-900 dark:text-gray-100' />
        </span>
      </nav>
    </header>
  )
}
