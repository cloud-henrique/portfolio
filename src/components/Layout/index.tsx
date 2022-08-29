import React, { ReactNode } from 'react'

import { Footer } from '../Footer'
import { Menu } from '../Menu'

import { Container, MainContainer } from './styles'

interface LayoutProps {
  children: ReactNode
}

export default function Layout({ children }: LayoutProps) {
  return (
    <Container>
      <Menu />

      <MainContainer>{children}</MainContainer>

      <Footer />
    </Container>
  )
}
