import React from 'react'
import { Heart } from 'react-feather'

import { Container, Separator } from './styles'
import Links from '../../constants/Links'
import theme from './../../styles/theme'

const Footer: React.FC = () => {
  const { colors } = theme

  return (
    <Container>
      <Separator />
      <span>
        Copyright &copy; 2021 – Desenvolvido com <Heart size={12} color={colors.primary} /> por{' '}
        <a href={Links.github} target='_blank' rel='noopener noreferrer'>
          Cláudio Henrique
        </a>
      </span>
    </Container>
  )
}

export default Footer
