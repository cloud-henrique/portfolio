import React from 'react'
import { Menu, X } from 'react-feather'

import { theme } from 'styles/theme'

import { StyledHamburger } from './styles'

const { colors } = theme
interface HamburgerProps {
  open: boolean
  setOpen: (open: boolean) => void
}

export function Hamburger({ open, setOpen }: HamburgerProps) {
  return (
    <StyledHamburger open={open} onClick={() => setOpen(!open)}>
      {open ? <X size={32} color={colors.light} /> : <Menu size={32} color={colors.light} />}
    </StyledHamburger>
  )
}
