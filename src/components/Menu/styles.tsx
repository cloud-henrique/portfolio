import styled from 'styled-components'

import theme from './../../styles/theme'

interface MenuProps {
  open: boolean
}

export const Container = styled.header`
  height: 5.6rem;

  display: flex;
  align-items: center;
  justify-content: center;

  @media (min-width: 768px) {
    height: 8rem;
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
    gap: 6.4rem;
  }
`

export const StyledMenu = styled.nav<MenuProps>`
  top: 0;
  right: 0;
  height: 100vh;
  width: 75vw;
  position: fixed;
  background-color: ${theme.colors.purpleNavy};
  z-index: 1;
  padding: 5.6rem 0;

  display: ${({ open }) => (open ? 'flex' : 'none')};
  flex-direction: column;

  transition: 300ms ease-in-out;
  transform: ${({ open }) => (open ? 'translateX(0)' : 'translateX(-100%)')};
`

export const StyledLink = styled.a`
  text-decoration: none;
  color: ${theme.colors.cultured};
  font-size: 2rem;
  /* font-weight: 500; */
  padding: 2rem;

  &:hover {
    transition: 300ms ease-in-out;
    color: ${theme.colors.secondary};
  }

  @media (min-width: 768px) {
    padding: 0;
  }
`
