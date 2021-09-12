import React, { useState } from 'react'

import { Menu } from '../Menu'
import { Container, MainContainer } from './styles'

const Layout: React.FC = props => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  function toggleMenu() {
    setIsMenuOpen(!isMenuOpen)
  }

  return (
    <Container>
      <Menu />

      <MainContainer>{props.children}</MainContainer>

      {/* TODO: Footer component */}
    </Container>
  )
}

export default Layout
