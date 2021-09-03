import styled from 'styled-components'
import theme from './../theme'

const { colors, font, spacing } = theme

export const Container = styled.main`
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0 ${spacing[4]};
`

export const TitleContainer = styled.article`
  padding: ${spacing[16]} ${spacing[12]} ${spacing[20]} ${spacing[12]};
  display: flex;
  flex-direction: column;
  gap: ${spacing[8]};

  h1 {
    font-size: ${font[32]};
    color: ${colors.primary};
    font-weight: 700;
  }

  h2 {
    font-size: ${font[20]};
    font-weight: 400;
  }
`

export const CTAContainer = styled.article`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  gap: ${spacing[8]};
`
