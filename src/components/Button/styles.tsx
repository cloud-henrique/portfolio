import styled from 'styled-components'

import { ButtonSizes } from '../../constants/ButtonSizes'
import theme from './../../styles/theme'

const { colors, font, spacing, breakpoints } = theme
interface ButtonProps {
  outline?: boolean
  rounded?: boolean
  size?: ButtonSizes
  desktopSize?: ButtonSizes
}

export const Container = styled.a<ButtonProps>`
  width: 100%;
  height: ${({ size }) => `${size}px`};

  padding: 0 ${spacing[8]};
  border-radius: ${({ rounded }) => (rounded ? '999px' : spacing[3])};
  background: ${({ outline }) => (outline ? 'transparent' : colors.primary)};
  border: ${({ outline }) => (outline ? `2px solid ${colors.primary}` : 'none')};

  display: flex;
  align-items: center;
  justify-content: center;
  text-decoration: none;
  cursor: pointer;

  font-size: ${font[20]};
  font-weight: 500;
  color: ${({ outline }) => (outline ? colors.primary : colors.dark)};

  &:hover {
    transition: 300ms ease-in-out;
    background: ${({ outline }) => (outline ? 'transparent' : colors.primaryDark)};
    border: ${({ outline }) => (outline ? `2px solid ${colors.primaryDark}` : 'none')};
    color: ${({ outline }) => (outline ? colors.primaryDark : colors.dark)};
  }

  @media screen and (min-width: ${breakpoints.md}) {
    height: ${({ desktopSize }) => `${desktopSize}px`};
  }
`
