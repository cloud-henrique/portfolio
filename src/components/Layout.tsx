import { ReactNode, useEffect, useState } from 'react'

import { useTheme } from 'next-themes'

import { Header, Footer, HamburguerMenu, MobileHeader } from 'components'

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

  if (!mounted) return null

  return (
    <>
      <Header toggleTheme={toggleTheme} isDarkTheme={currentTheme === 'dark'} />

      <HamburguerMenu open={openMobileMenu} setOpen={setOpenMobileMenu} />

      <MobileHeader open={openMobileMenu} toggleTheme={toggleTheme} isDarkTheme={currentTheme === 'dark'} />

      <div className={openMobileMenu ? 'blur' : 'flex-col'}>
        <main>{children}</main>
        {/* <Footer /> */}
      </div>
    </>
  )
}
