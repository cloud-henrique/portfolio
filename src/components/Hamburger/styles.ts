import styled from 'styled-components'

import { theme } from '../../styles/theme'

const { spacing } = theme

export const StyledHamburger = styled.button<{ open: boolean }>`
  position: fixed;
  right: ${spacing[5]};
  top: ${spacing[3]};
  padding: 0;
  background: transparent;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  cursor: pointer;
  z-index: 3;
`
