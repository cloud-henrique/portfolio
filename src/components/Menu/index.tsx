import React, { useState } from 'react'

import {
  Container,
  MobileMenu,
  DesktopMenu,
  StyledMenu,
  StyledLink,
} from './styles'
import { Hamburger } from '../Hamburger'
import { Links } from '../../constants/Links'

export function Menu() {
  const [open, setOpen] = useState(false)

  function renderDesktopMenu() {
    return (
      <DesktopMenu>
        {Links.internal.map(item => (
          <StyledLink key={item.key} href={item.href}>
            {item.name}
          </StyledLink>
        ))}
      </DesktopMenu>
    )
  }

  function renderMobileMenu() {
    return (
      <MobileMenu>
        <Hamburger open={open} setOpen={setOpen} />

        <StyledMenu open={open}>
          {Links.internal.map(item => (
            <StyledLink key={item.key} href={item.href}>
              {item.name}
            </StyledLink>
          ))}
        </StyledMenu>
      </MobileMenu>
    )
  }

  return (
    <Container>
      {renderMobileMenu()}
      {renderDesktopMenu()}
    </Container>
  )
}
