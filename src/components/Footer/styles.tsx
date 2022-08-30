import styled from 'styled-components'

import { theme } from 'styles/theme'

const { colors, font, spacing, breakpoints } = theme

export const Container = styled.footer`
  align-items: center;
  display: flex;
  flex-direction: column;
  gap: ${spacing[4]};
  height: ${spacing[14]};
  justify-content: center;
  width: 100vw;

  span,
  span > * {
    font-size: ${font[12]};
  }

  a {
    color: ${colors.primary};
    font-weight: bold;
    text-decoration: none;
  }

  @media screen and (min-width: ${breakpoints.desktop}) {
    span,
    span > * {
      font-size: ${font[16]};
    }
  }
`

export const Separator = styled.span`
  background-color: ${`${colors.light}40`};
  display: flex;
  height: ${spacing.px};
  width: 90%;

  @media screen and (min-width: ${breakpoints.desktop}) {
    width: 70%;
  }
`
