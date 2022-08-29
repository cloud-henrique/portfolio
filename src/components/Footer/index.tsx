import React from 'react'
import { Heart } from 'react-feather'

import Links from '../../constants/Links'
import { theme } from '../../styles/theme'

import { Container, Separator } from './styles'

export default function Footer() {
  const { colors } = theme

  return (
    <Container>
      <Separator />
      <span>
        Copyright &copy; 2021 – Desenvolvido com{' '}
        <Heart size={12} color={colors.primary} /> por{' '}
        <a href={Links.github} target='_blank' rel='noopener noreferrer'>
          Cláudio Henrique
        </a>
      </span>
    </Container>
  )
}
