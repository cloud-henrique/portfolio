import styled from 'styled-components'

import { theme } from 'styles/theme'

const { spacing } = theme

export const StyledHamburger = styled.button<{ open: boolean }>`
  background: transparent;
  cursor: pointer;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  padding: 0;
  position: fixed;
  right: ${spacing[5]};
  top: ${spacing[3]};
  z-index: 3;
`
