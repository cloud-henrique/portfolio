import styled from 'styled-components'

import theme from './../../styles/theme'

export const Container = styled.div`
  display: flex;
  height: 56px;
  /* justify-content: flex-end; */
  /* https://javascript.plainenglish.io/create-your-own-hamburger-menu-using-react-hooks-typescript-and-styled-components-4b2797c4d193 */
  /* align-items: flex-end; */
  background-color: ${theme.colors.dark};
`

export const StyledMenu = styled.nav<{ open: boolean }>`
  top: 0;
  right: 0;
  height: 100vh;
  width: 75vw;
  position: fixed;
  background-color: ${theme.colors.primary};
  /* border: 1px solid #fff; */
  z-index: 1;
  padding: 10rem 0;
  padding: 10vh 2rem;

  flex-direction: column;
  display: ${({ open }) => (open ? 'flex' : 'none')};
  gap: 4rem;

  transition: 300ms ease-in-out;
  transform: ${({ open }) => (open ? 'translateX(0)' : 'translateX(-100%)')};
`

export const StyledLink = styled.a`
  text-decoration: none;
  color: ${theme.colors.dark};
  font-size: 2rem;
  font-weight: 500;

  &:hover {
    transition: 300ms ease-in-out;
    color: ${theme.colors.secondary};
  }

  /* padding: 0 2rem;
  font-size: 2rem;
  color: ${theme.colors.light};
  text-decoration: none;

  &:hover {
    color: ${theme.colors.primary};
    cursor: pointer;
  } */
`
