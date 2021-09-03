import styled from 'styled-components'

import theme from './../../styles/theme'

const { colors, font, spacing } = theme
interface MenuProps {
  open: boolean
}

export const Container = styled.header`
  height: ${spacing[14]};

  display: flex;
  align-items: center;
  justify-content: center;

  @media (min-width: 768px) {
    height: ${spacing[10]};
  }
`

export const MobileMenu = styled.div`
  display: flex;

  @media (min-width: 768px) {
    display: none;
  }
`
export const DesktopMenu = styled.nav`
  display: none;
  height: 100%;

  @media (min-width: 768px) {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: ${spacing[16]};
  }
`

export const StyledMenu = styled.nav<MenuProps>`
  top: 0;
  right: 0;
  height: 100vh;
  width: 75vw;
  position: fixed;
  background-color: ${colors.purpleNavy};
  z-index: 1;
  padding: ${spacing[14]} 0;

  display: ${({ open }) => (open ? 'flex' : 'none')};
  flex-direction: column;

  transition: 300ms ease-in-out;
  transform: ${({ open }) => (open ? 'translateX(0)' : 'translateX(-100%)')};
`

export const StyledLink = styled.a`
  text-decoration: none;
  color: ${colors.cultured};
  font-size: ${font[20]};
  /* font-weight: 500; */
  padding: ${spacing[5]};

  &:hover {
    transition: 300ms ease-in-out;
    color: ${colors.secondary};
  }

  @media (min-width: 768px) {
    padding: 0;
  }
`
