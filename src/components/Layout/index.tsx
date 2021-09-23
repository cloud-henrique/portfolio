import React, { useState } from 'react'
import Footer from '../Footer'

import { Menu } from '../Menu'
import { Container, MainContainer } from './styles'

const Layout: React.FC = props => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <Container>
      <Menu />

      <MainContainer>{props.children}</MainContainer>

      <Footer />
    </Container>
  )
}

export default Layout
