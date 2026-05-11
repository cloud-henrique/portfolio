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
      aria-label={open ? 'Fechar menu' : 'Abrir menu'}
      className='fixed right-5 top-3 z-[60] flex cursor-pointer flex-col justify-around bg-transparent p-0 md:hidden'
    >
      {open ? <X className='h-8 w-8 text-gray-50' /> : <Menu className='h-8 w-8 text-primary-800 dark:text-gray-50' />}
    </button>
  )
}
