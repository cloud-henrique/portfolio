import styled from 'styled-components'
import theme from './../theme'

export const Container = styled.main`
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 0 2rem;
`

export const TitleContainer = styled.article`
  padding: 5.6rem 2.8rem 8rem 2.8rem;
  display: flex;
  flex-direction: column;
  gap: 3.2rem;

  h1 {
    font-size: 3.6rem;
    color: ${theme.colors.primary};
    font-weight: 700;
  }

  h2 {
    font-size: 2rem;
    font-weight: 400;
  }
`

export const CTAContainer = styled.article`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  gap: 3rem;
`
