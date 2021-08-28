import styled from 'styled-components'
import theme from './../../styles/theme'

interface ButtonProps {
  outline?: boolean
  rounded?: boolean
  size?: number
}

export const Container = styled.a<ButtonProps>`
  width: 100%;
  height: ${({ size }) => `${size}rem`};

  padding: 0 3.2rem;
  border-radius: ${({ rounded }) => (rounded ? '999px' : '1.2rem')};
  background: ${({ outline }) => (outline ? 'transparent' : theme.colors.secondary)};
  border: ${({ outline }) => (outline ? `2px solid ${theme.colors.secondary}` : 'none')};

  display: flex;
  align-items: center;
  justify-content: center;
  text-decoration: none;
  cursor: pointer;

  font-size: 2rem;
  font-weight: 400;
  color: ${({ outline }) => (outline ? theme.colors.secondary : theme.colors.dark)};

  &:hover {
    transition: 300ms ease-in-out;
    background: ${({ outline }) => (outline ? 'transparent' : theme.colors.secondaryDark)};
    border: ${({ outline }) => (outline ? `2px solid ${theme.colors.secondaryDark}` : 'none')};
    color: ${({ outline }) => (outline ? theme.colors.secondaryDark : theme.colors.dark)};
  }
`
