import styled from 'styled-components'

import { theme } from 'styles/theme'

const { colors, font, spacing, breakpoints } = theme
interface MenuProps {
  open: boolean
}

export const Container = styled.header`
  align-items: center;
  display: flex;
  height: ${spacing[14]};
  justify-content: center;

  @media screen and (min-width: ${breakpoints.md}) {
    height: ${spacing[20]};
  }

  @media screen and (min-width: 1366px) {
    padding: 0 calc((100vw - 1266px) / 2);
    width: 100vw;
  }
`

export const MobileMenu = styled.div`
  display: flex;

  @media screen and (min-width: ${breakpoints.md}) {
    display: none;
  }
`
export const DesktopMenu = styled.nav`
  display: none;
  height: 100%;

  @media screen and (min-width: ${breakpoints.md}) {
    align-items: center;
    display: flex;
    gap: ${spacing[16]};
    justify-content: center;
  }
`

export const StyledMenu = styled.nav<MenuProps>`
  background-color: ${colors.secondary};
  display: ${({ open }) => (open ? 'flex' : 'none')};
  flex-direction: column;
  height: 100vh;
  padding: ${spacing[14]} 0;
  position: fixed;
  right: 0;
  top: 0;
  transform: ${({ open }) => (open ? 'translateX(0)' : 'translateX(-100%)')};
  transition: 300ms ease-in-out;
  width: 75vw;
  z-index: 1;
`

export const StyledLink = styled.a`
  color: ${colors.primary};
  font-size: ${font[18]};
  padding: ${spacing[5]};
  text-decoration: none;

  &:hover {
    color: ${colors.primary};
    transition: 300ms ease-in-out;
  }

  @media screen and (min-width: ${breakpoints.md}) {
    color: ${colors.light};
    padding: 0;
  }
`
