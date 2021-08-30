import React, { useState } from 'react'
import styled from 'styled-components'
import { Menu, X } from 'react-feather'

import theme from './../../styles/theme'

const StyledHamburguer = styled.button<{ open: boolean }>`
  position: fixed;
  /* right: 3vw; */
  /* right: ${({ open }) => (open ? '3vw' : '3vw')}; */
  right: 2rem;
  top: 1.2rem;
  /* width: 2rem;
  height: 2rem; */
  padding: 0;
  background: transparent;
  /* background: ${theme.colors.primary}; */

  display: flex;
  flex-direction: column;
  justify-content: space-around;
  cursor: pointer;
  z-index: 1;
`

type Props = {
  open: boolean
  setOpen: (v: boolean) => void
}

export const Hamburguer = (props: Props) => {
  return (
    <StyledHamburguer open={props.open} onClick={() => props.setOpen(!props.open)}>
      {props.open ? <X size={32} color={theme.colors.light} /> : <Menu size={32} color={theme.colors.light} />}
    </StyledHamburguer>
  )
}
