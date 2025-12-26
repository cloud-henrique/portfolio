'use client'

import { ReactNode, useEffect, useState } from 'react'
import { useTheme } from 'next-themes'
import { Footer, HamburguerMenu, Header, MobileHeader } from '@/components'

interface LayoutProps {
  children: ReactNode
}

export function Layout({ children }: LayoutProps) {
  const [mounted, setMounted] = useState(false)
  const [openMobileMenu, setOpenMobileMenu] = useState(false)

  const { systemTheme, theme, setTheme } = useTheme()

  const currentTheme = theme === 'system' ? systemTheme : theme

  const toggleTheme = () => (currentTheme === 'dark' ? setTheme('light') : setTheme('dark'))

  useEffect(() => {
    setMounted(true)
  }, [])

  useEffect(() => {
    if (openMobileMenu) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'unset'
    }

    return () => {
      document.body.style.overflow = 'unset'
    }
  }, [openMobileMenu])

  if (!mounted) return null

  return (
    <>
      <Header toggleTheme={toggleTheme} isDarkTheme={currentTheme === 'dark'} />

      <HamburguerMenu open={openMobileMenu} setOpen={setOpenMobileMenu} />

      <MobileHeader
        open={openMobileMenu}
        toggleTheme={toggleTheme}
        isDarkTheme={currentTheme === 'dark'}
        setOpen={setOpenMobileMenu}
      />

      {openMobileMenu && (
        <div className='fixed inset-0 bg-black/50 z-40 md:hidden' onClick={() => setOpenMobileMenu(false)} />
      )}

      <div className={openMobileMenu ? 'pointer-events-none' : 'flex-col'}>
        <main>{children}</main>
        <Footer />
      </div>
    </>
  )
}
