'use client'

import { X, Menu } from 'react-feather'

export interface HamburguerMenuProps {
  open: boolean
  setOpen: (open: boolean) => void
}

export function HamburguerMenu({ open, setOpen }: HamburguerMenuProps) {
  return (
    <button
      type='button'
      onClick={() => setOpen(!open)}
      className='md:hidden bg-transparent cursor-pointer flex flex-col justify-around p-0 fixed right-5 top-3 z-50'
    >
      {open ? <X className='h-8 w-8 text-gray-50' /> : <Menu className='h-8 w-8 text-primary-500 dark:text-gray-50' />}
    </button>
  )
}
