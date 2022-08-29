import styled from 'styled-components'

import { theme } from '../../styles/theme'

const { colors, font, spacing, breakpoints } = theme

export const Container = styled.footer`
  width: 100vw;
  display: flex;
  flex-direction: column;
  gap: ${spacing[4]};
  align-items: center;
  justify-content: center;
  height: ${spacing[14]};

  span,
  span > * {
    font-size: ${font[12]};
  }

  a {
    text-decoration: none;
    color: ${colors.primary};
  }

  @media screen and (min-width: ${breakpoints.desktop}) {
    span,
    span > * {
      font-size: ${font[16]};
    }
  }
`
export const Separator = styled.span`
  width: 90%;
  height: ${spacing.px};

  display: flex;
  background-color: ${`${colors.light}40`};
  @media screen and (min-width: ${breakpoints.desktop}) {
    width: 70%;
  }
`
