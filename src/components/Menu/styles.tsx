import styled from 'styled-components';

import theme from './../../styles/theme';

const { colors, font, spacing, breakpoints } = theme;
interface MenuProps {
  open: boolean;
}

export const Container = styled.header`
  height: ${spacing[14]};

  display: flex;
  align-items: center;
  justify-content: center;

  @media screen and (min-width: ${breakpoints.md}) {
    height: ${spacing[20]};
  }

  @media screen and (min-width: 1366px) {
    width: 100vw;
    padding: 0 calc((100vw - 1266px) / 2);
  }
`;

export const MobileMenu = styled.div`
  display: flex;

  @media screen and (min-width: ${breakpoints.md}) {
    display: none;
  }
`;
export const DesktopMenu = styled.nav`
  display: none;
  height: 100%;

  @media screen and (min-width: ${breakpoints.md}) {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: ${spacing[16]};
  }
`;

export const StyledMenu = styled.nav<MenuProps>`
  top: 0;
  right: 0;
  height: 100vh;
  width: 75vw;
  position: fixed;
  background-color: ${colors.primaryDark};
  z-index: 1;
  padding: ${spacing[14]} 0;

  display: ${({ open }) => (open ? 'flex' : 'none')};
  flex-direction: column;

  transition: 300ms ease-in-out;
  transform: ${({ open }) => (open ? 'translateX(0)' : 'translateX(-100%)')};
`;

export const StyledLink = styled.a`
  text-decoration: none;
  color: ${colors.light};
  font-size: ${font[20]};
  /* font-weight: 500; */
  padding: ${spacing[5]};

  &:hover {
    transition: 300ms ease-in-out;
    color: ${colors.secondary};
  }

  @media screen and (min-width: ${breakpoints.md}) {
    padding: 0;
  }
`;
