import React from 'react'
import { Heart } from 'react-feather'

import { Links } from 'constants/Links'

import { theme } from 'styles/theme'

import { Container, Separator } from './styles'

export function Footer() {
  const { colors } = theme

  const year = new Date().getFullYear().toString()

  return (
    <Container>
      <Separator />
      <span>
        Copyright &copy; {year} - Desenvolvido com <Heart size={12} fill={colors.primary} /> por{' '}
        <a href={Links.github} target='_blank' rel='noopener noreferrer'>
          Cláudio Henrique
        </a>
      </span>
    </Container>
  )
}
