/* eslint-disable max-len */
import { FC, SVGAttributes } from 'react'

export interface IconProps extends SVGAttributes<SVGElement> {
  color?: string
  size?: string | number
}

export type Icon = FC<IconProps>

interface ContactCardProps {
  contact: {
    icon: Icon
    title: string
    href: string
    link: string
  }
}

export function ContactCard({ contact }: ContactCardProps) {
  return (
    <li key={contact.href} className='flex flex-col gap-3 items-center justify-center text-center'>
      <p className='text-gray-900 dark:text-gray-400'>{contact.title}</p>
      <a
        target='_blank'
        rel='noreferrer'
        key={contact.href}
        href={contact.href}
        className='flex rounded-lg bg-gradient-to-b p-[2px] w-full md:w-80 from-primary-500 to-primary-500/80 dark:from-primary-300 dark:to-primary-300/50 hover:shadow-md hover:dark:shadow-white/20 transition-all'
      >
        <div className='flex gap-3 items-center justify-center bg-gray-50 dark:bg-gray-900 w-full md:w-80 rounded-md p-3'>
          <contact.icon className='w-6 h-6 text-primary-500 dark:text-primary-300' />
          <p className='text-transparent bg-clip-text bg-gradient-to-b from-primary-500 to-primary-500/80 dark:from-primary-300 dark:to-primary-300/50'>
            {contact.link}
          </p>
        </div>
      </a>
    </li>
  )
}
