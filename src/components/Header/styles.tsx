import styled from 'styled-components'
import theme from './../../styles/theme'

export const Container = styled.header`
  width: 100vw;
  height: 5.6rem;

  display: flex;
  align-items: center;
  justify-content: flex-end;
  padding: 0 2rem;

  /* background-color: transparent; */
  background-color: ${theme.colors.primary};
  color: ${theme.colors.light};

  @media (min-width: 768px) {
    height: 6.4rem;
    justify-content: center;
  }
`

export const ButtonIcon = styled.button`
  background-color: transparent;
  padding: 0.4rem;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
`
export const DesktopMenu = styled.nav`
  display: none;

  @media (min-width: 768px) {
    width: 100vw;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 6.4rem;
  }
`

export const MenuLink = styled.a`
  text-decoration: none;
  color: ${theme.colors.light};
  font-size: 2rem;

  &:hover {
    transition: 300ms ease-in-out;
    color: ${theme.colors.secondary};
  }
`

export const MobileContainer = styled.div`
  width: 100vw;
  height: 100vh;

  position: fixed;
  /* right: ${props => (props.isMenuOpen ? '-100%' : 0)}; */
  top: 0;
  transition: 300ms ease-in-out;
  transform: translateX(-100%);
`

export const Overlay = styled.div`
  width: 100vw;
  height: 100vh;

  position: absolute;
  top: 0;
  right: 0;
`
