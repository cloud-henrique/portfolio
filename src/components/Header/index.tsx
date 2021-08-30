import Link from 'next/link'
import React, { MouseEvent, useState } from 'react'
import { Menu, X } from 'react-feather'
import theme from '../../styles/theme'
import Links from './../../constants/Links'

import { ButtonIcon, Container, DesktopMenu, Overlay, MenuLink, MobileContainer } from './styles'

interface HeaderProps {
  isMenuOpen: boolean
  handleToggleMenu: React.MouseEventHandler<HTMLAnchorElement>
}

const Header: React.FC = props => {
  function renderMobileMenu() {
    return (
      <MobileContainer>
        {/* <Overlay onClick={props.handleToggleMenu} />

        <ButtonIcon onClick={handleToggleMenu}>
          <X size={32} color={theme.colors.light} />
          <Menu size={32} color={theme.colors.light} />
        </ButtonIcon> */}
      </MobileContainer>
    )
  }

  function renderDesktopMenu() {
    return (
      <DesktopMenu>
        {Links.internal.map(item => (
          <Link key={item.key} href={item.href} passHref>
            <MenuLink id={item.href}>{item.name}</MenuLink>
          </Link>
        ))}
      </DesktopMenu>
    )
  }

  return (
    <>
      {/* // <Container isMenuOpen={isMenuOpen}>
    //   {renderDesktopMenu()}
    //   {renderMobileMenu()}
    // </Container> */}
    </>
  )
}

export default Header
