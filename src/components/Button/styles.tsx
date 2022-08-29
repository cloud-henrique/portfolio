import styled from 'styled-components'

import { ButtonSizes } from '../../constants/ButtonSizes'
import { theme } from '../../styles/theme'

const { colors, font, spacing, breakpoints } = theme
interface ButtonProps {
  desktopSize?: ButtonSizes
  outline?: boolean
  rounded?: boolean
  size?: ButtonSizes
}

export const Container = styled.a<ButtonProps>`
  align-items: center;
  background: ${({ outline }) => (outline ? 'transparent' : colors.primary)};
  border-radius: ${({ rounded }) => (rounded ? '999px' : spacing[3])};
  border: ${({ outline }) => (outline ? `2px solid ${colors.primary}` : 'none')};
  color: ${({ outline }) => (outline ? colors.primary : colors.dark)};
  cursor: pointer;
  display: flex;
  font-size: ${font[20]};
  font-weight: 500;
  height: ${({ size }) => `${size}px`};
  justify-content: center;
  padding: 0 ${spacing[8]};
  text-decoration: none;
  width: 100%;

  &:hover {
    background: ${({ outline }) => (outline ? 'transparent' : colors.primaryDark)};
    border: ${({ outline }) => (outline ? `2px solid ${colors.primaryDark}` : 'none')};
    color: ${({ outline }) => (outline ? colors.primaryDark : colors.dark)};
    transition: 300ms ease-in-out;
  }

  @media screen and (min-width: ${breakpoints.md}) {
    height: ${({ desktopSize }) => `${desktopSize}px`};
  }
`
