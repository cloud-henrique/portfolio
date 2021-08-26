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

export const ButtonPrimary = styled.button`
  width: 100%;
  padding: 1.6rem 0;
  background-color: ${theme.colors.secondary};
  border-radius: 1.2rem;
  font-size: 2rem;
  font-weight: 400;
  border: 0;
`

export const ButtonSecondary = styled.button`
  width: 100%;
  padding: 1.6rem 0;
  border: 2px solid ${theme.colors.secondary};
  border-radius: 1.2rem;
  background-color: transparent;
  font-size: 2rem;
  font-weight: 400;
  color: ${theme.colors.text};
`
