import styled from 'styled-components'

import theme from './../theme'

const { colors, font, spacing, breakpoints } = theme

interface HomeProps {
  textCenter?: boolean
}

export const Container = styled.main`
  width: 100vw;

  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0 ${spacing[5]};
  gap: ${spacing[16]};

  @media screen and (min-width: ${breakpoints.desktop}) {
    padding: 0 calc((100vw - 1266px) / 2);
  }
`

export const HomeContainer = styled.section`
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: space-between;
  gap: ${spacing[32]};
  /* height: calc(100vh - ${spacing[14]}); */

  @media screen and (min-width: ${breakpoints.md}) {
    flex-direction: row;
    align-items: center;
    height: calc(100vh - ${spacing[20]});
  }
`

export const HeroLeft = styled.article`
  display: flex;
  flex-direction: column;
  padding-top: ${spacing[16]};
  gap: ${spacing[20]};

  @media screen and (min-width: ${breakpoints.md}) {
    width: 50%;

    display: flex;
    flex-direction: column;
    align-items: flex-start;
    text-align: left;
    justify-content: center;
    gap: ${spacing[24]};
  }
`

export const TitleContainer = styled.article<HomeProps>`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  text-align: ${({ textCenter }) => (textCenter ? 'center' : 'left')};
  gap: ${spacing[6]};
  max-width: 80vw;
  /* border: 1px solid #faf; */

  h1,
  h2 {
    font-size: ${font[40]};
    color: ${colors.primary};
    font-weight: 700;

    @media screen and (min-width: ${breakpoints.md}) {
      font-size: ${font[64]};
    }
  }

  h3 {
    font-size: ${font[24]};
    font-weight: 400;

    @media screen and (min-width: ${breakpoints.md}) {
      font-size: ${font[24]};
    }
  }

  @media screen and (min-width: ${breakpoints.md}) {
    text-align: left;
    display: flex;
    justify-content: flex-start;
    padding: 0;
  }
`

export const CTAContainer = styled.article`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  gap: ${spacing[8]};

  @media screen and (min-width: ${breakpoints.md}) {
    flex-direction: row;
  }
`

export const HeroRight = styled.article`
  display: none;

  @media screen and (min-width: ${breakpoints.md}) {
    width: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    background: no-repeat center/80% url('/waves.svg');
    height: 100%;
  }
`

export const AboutContainer = styled.section`
  width: 100%;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: ${spacing[16]} 0;
  gap: ${spacing[16]};
`

export const AboutLeft = styled.article``
export const AboutRight = styled.article`
  display: flex;
  flex-direction: column;
  gap: ${spacing[10]};
`

export const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${spacing[6]};

  p {
    line-height: 150%;
  }
`

export const ProjectsContainer = styled.section`
  width: 100%;
`
