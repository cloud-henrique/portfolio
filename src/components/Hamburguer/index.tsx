import React, { useState } from 'react'
import styled from 'styled-components'
import { Menu, X } from 'react-feather'

import theme from './../../styles/theme'

interface HamburguerProps {
  open: boolean
  setOpen: (v: boolean) => void
}

const StyledHamburguer = styled.button<{ open: boolean }>`
  position: fixed;
  right: 2rem;
  top: 1.2rem;
  padding: 0;
  background: transparent;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  cursor: pointer;
  z-index: 2;
`

export const Hamburguer = ({ open, setOpen }: HamburguerProps) => {
  return (
    <StyledHamburguer open={open} onClick={() => setOpen(!open)}>
      {open ? <X size={32} color={theme.colors.light} /> : <Menu size={32} color={theme.colors.light} />}
    </StyledHamburguer>
  )
}
