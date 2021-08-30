import React, { useState } from 'react'

import { Container, StyledMenu, StyledLink } from './styles'
import { Hamburguer } from './../Hamburguer'
import Links from '../../constants/Links'

export const Menu = () => {
  const [open, setOpen] = useState(false)

  const close = () => setOpen(false)

  return (
    <Container>
      <StyledMenu open={open}>
        {Links.internal.map(item => (
          <StyledLink key={item.key} href={item.href}>
            {item.name}
          </StyledLink>
        ))}
      </StyledMenu>

      <Hamburguer open={open} setOpen={setOpen} />
    </Container>
  )
}
