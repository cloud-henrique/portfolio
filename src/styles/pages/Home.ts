import styled from 'styled-components'
import Image from 'next/image'

import { theme } from 'styles/theme'

const { colors, font, spacing, breakpoints } = theme

interface HomeProps {
  growOnDesktop?: boolean
  textCenter?: boolean
}

export const Container = styled.main`
  align-items: center;
  display: flex;
  flex-direction: column;
  gap: ${spacing[20]};
  padding: 0 ${spacing[5]};
  width: 100vw;

  @media screen and (min-width: ${breakpoints.desktop}) {
    padding: 0 calc((100vw - 1266px) / 2);
  }
`

export const HomeContainer = styled.section`
  align-items: center;
  display: flex;
  flex-direction: column;
  gap: ${spacing[32]};
  justify-content: space-between;

  @media screen and (min-width: ${breakpoints.md}) {
    align-items: center;
    flex-direction: row;
    height: calc(100vh - ${spacing[20]});
  }
`

export const HeroLeft = styled.article`
  display: flex;
  flex-direction: column;
  gap: ${spacing[20]};
  padding-top: ${spacing[4]};

  @media screen and (min-width: ${breakpoints.md}) {
    align-items: flex-start;
    display: flex;
    flex-direction: column;
    gap: ${spacing[16]};
    justify-content: center;
    text-align: left;
    width: 50%;
  }
`

export const TitleContainer = styled.article<HomeProps>`
  display: flex;
  flex-direction: column;
  gap: ${spacing[6]};
  justify-content: center;
  max-width: 80vw;
  text-align: ${({ textCenter }) => (textCenter ? 'center' : 'left')};

  h1,
  h2 {
    color: ${colors.primary};
    font-size: ${font[40]};
    font-weight: 700;

    @media screen and (min-width: ${breakpoints.md}) {
      font-size: ${font[48]};
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
    display: flex;
    justify-content: flex-start;
    padding: 0;
    text-align: left;
  }
`

export const CTAContainer = styled.article`
  align-items: center;
  display: flex;
  flex-direction: column;
  gap: ${spacing[8]};
  justify-content: space-between;

  @media screen and (min-width: ${breakpoints.md}) {
    flex-direction: row;
  }
`

export const HeroRight = styled.article`
  display: none;

  @media screen and (min-width: ${breakpoints.md}) {
    align-items: center;
    display: flex;
    height: 100%;
    justify-content: center;
    width: 50%;
  }
`

export const AboutContainer = styled.section`
  align-items: center;
  display: flex;
  flex-direction: column;
  gap: ${spacing[8]};
  justify-content: center;
  width: 100%;

  @media screen and (min-width: ${breakpoints.desktop}) {
    flex-direction: row-reverse;
    height: 100vh;
  }
`

export const AboutLeft = styled.article`
  @media screen and (min-width: ${breakpoints.desktop}) {
    align-items: center;
    background: no-repeat center/70% url('/waves.svg');
    display: flex;
    height: 100%;
    justify-content: center;
    width: 50%;
    z-index: -9;
  }
`

export const AboutRight = styled.article`
  display: flex;
  flex-direction: column;
  gap: ${spacing[10]};

  @media screen and (min-width: ${breakpoints.desktop}) {
    width: 70%;
  }
`

export const TextContainer = styled.div<HomeProps>`
  display: flex;
  flex-direction: column;
  gap: ${spacing[6]};

  p {
    line-height: 150%;
  }

  @media screen and (min-width: ${breakpoints.desktop}) {
    p,
    p > * {
      font-size: ${({ growOnDesktop }) => (growOnDesktop ? '24px' : '16px')};
    }
  }
`

export const ProjectsContainer = styled.section`
  display: flex;
  flex-direction: column;
  gap: ${spacing[10]};
  justify-content: center;
  width: 100%;

  @media screen and (min-width: ${breakpoints.desktop}) {
    height: 100vh;
  }
`
export const ProjectsList = styled.ul`
  align-items: center;
  display: flex;
  flex-wrap: wrap;
  gap: ${spacing[10]};
  justify-content: center;

  @media screen and (min-width: ${breakpoints.desktop}) {
    justify-content: flex-start;
    gap: ${spacing[24]};
  }
`

export const ProjectContainer = styled.a`
  align-items: center;
  display: flex;
  flex-direction: column;
  gap: ${spacing[3]};
  height: 100%;
  text-decoration: none;
  width: 350px;

  @media screen and (min-width: ${breakpoints.desktop}) {
    &:hover {
      transition: 300ms ease-in-out;
      opacity: 0.6;
    }
  }
`

export const ProjectPreview = styled.div`
  align-items: baseline;
  display: flex;
  height: 100%;
  justify-content: center;
  width: 100%;
`

export const ProjectContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${spacing[3]};
`

export const ProjectTitle = styled.span`
  align-items: center;
  display: flex;
  justify-content: space-between;

  p {
    color: ${colors.primary};
    font-size: ${font[18]};
  }
`

export const ProjectDescription = styled.p`
  color: ${colors.light};
  font-size: ${font[14]};
  line-height: 150%;
`

export const ExperiencesContainer = styled.section`
  display: flex;
  flex-direction: column;
  gap: ${spacing[5]};

  @media screen and (min-width: ${breakpoints.desktop}) {
    gap: ${spacing[10]};
    min-height: 100vh;
    padding-top: ${spacing[4]};
  }
`

export const ExperiencesList = styled.ul`
  display: flex;
  flex-direction: column;
  gap: ${spacing[6]};

  @media screen and (min-width: ${breakpoints.desktop}) {
    gap: ${spacing[10]};
  }
`

export const ExperienceContainer = styled.article`
  align-items: center;
  border-radius: ${spacing[2]};
  border: 1px solid ${colors.primaryDark};
  display: flex;
  gap: ${spacing[4]};
  padding: ${spacing[4]};
  width: 100%;

  h3 {
    font-size: ${font[20]};
    font-weight: 500;
  }

  @media screen and (min-width: ${breakpoints.desktop}) {
    border-radius: ${spacing[3]};
    gap: ${spacing[6]};
    justify-content: space-between;
    padding: ${spacing[4]} ${spacing[6]};

    h3 {
      font-size: ${font[24]};
    }
  }
`

export const ExperienceContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${spacing[4]};

  @media screen and (min-width: ${breakpoints.desktop}) {
    gap: ${spacing[6]};
    width: 70%;
  }
`

export const ExperienceMedia = styled.a`
  display: none;

  @media screen and (min-width: ${breakpoints.desktop}) {
    border-radius: ${spacing[3]};
    border: 1px solid ${`${colors.light}20`};
    display: flex;

    &:hover {
      opacity: 0.6;
      transition: all 300ms ease-in-out;
    }
  }
`

export const StyledImage = styled(Image)`
  border-radius: ${spacing[2]};

  @media screen and (min-width: ${breakpoints.desktop}) {
    border-radius: ${spacing[3]};
  }
`

export const ContactContainer = styled.section`
  display: flex;
  flex-direction: column;
  gap: ${spacing[10]};
  justify-content: flex-start;
  width: 100%;

  @media screen and (min-width: ${breakpoints.desktop}) {
    padding-bottom: ${spacing[10]};
    padding-top: ${spacing[4]};
  }
`

export const ContactBody = styled.article`
  align-items: center;
  display: flex;
  flex-direction: column;
  gap: ${spacing[6]};

  @media screen and (min-width: ${breakpoints.desktop}) {
    flex-direction: row;
    gap: 0;
    justify-content: space-between;
    padding: ${spacing[8]};
  }
`

export const ContactForm = styled.form`
  border-radius: ${spacing[3]};
  border: 1px solid ${colors.light};
  display: flex;
  flex-direction: column;
  gap: ${spacing[5]};
  padding: ${spacing[6]};
  width: 100%;

  @media screen and (min-width: ${breakpoints.desktop}) {
    border-radius: ${spacing[4]};
    width: 50%;
  }
`

export const ContactLabel = styled.label`
  display: flex;
  flex-direction: column;
  gap: ${spacing[2]};

  input,
  textarea {
    border-radius: ${spacing[1]};
    padding: ${spacing[2]};
  }

  input {
    height: ${spacing[10]};
  }

  textarea {
    resize: none;
  }
`

export const ContactFooter = styled.footer`
  align-items: center;
  display: flex;
  flex-direction: column;
  gap: ${spacing[10]};
  justify-content: center;
  padding-bottom: ${spacing[10]};

  nav {
    align-items: baseline;
    display: flex;
    gap: ${spacing[6]};
    justify-content: center;
    text-align: center;
  }

  a {
    align-items: center;
    background-color: ${colors.primary};
    border-radius: 50%;
    display: flex;
    justify-content: space-evenly;
    padding: ${spacing[3]};

    &:hover {
      transition: 300ms ease-in-out;
      opacity: 0.6;
    }
  }

  @media screen and (min-width: 1366px) {
    gap: ${spacing[6]};
    padding-bottom: 0;

    nav {
      gap: ${spacing[16]};
    }
  }
`
