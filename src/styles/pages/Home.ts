import styled from 'styled-components'
import Image from 'next/image'

import { theme } from '../theme'

const { colors, font, spacing, breakpoints } = theme

interface HomeProps {
  textCenter?: boolean
  growOnDesktop?: boolean
}

export const Container = styled.main`
  width: 100vw;

  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0 ${spacing[5]};
  gap: ${spacing[20]};

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

  @media screen and (min-width: ${breakpoints.md}) {
    flex-direction: row;
    align-items: center;
    height: calc(100vh - ${spacing[20]});
  }
`

export const HeroLeft = styled.article`
  display: flex;
  flex-direction: column;
  padding-top: ${spacing[4]};
  gap: ${spacing[20]};

  @media screen and (min-width: ${breakpoints.md}) {
    width: 50%;

    display: flex;
    flex-direction: column;
    align-items: flex-start;
    text-align: left;
    justify-content: center;
    gap: ${spacing[16]};
  }
`

export const TitleContainer = styled.article<HomeProps>`
  display: flex;
  justify-content: center;
  flex-direction: column;
  text-align: ${({ textCenter }) => (textCenter ? 'center' : 'left')};
  gap: ${spacing[6]};
  max-width: 80vw;

  h1,
  h2 {
    font-size: ${font[40]};
    color: ${colors.primary};
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
    height: 100%;
  }
`

export const AboutContainer = styled.section`
  width: 100%;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: ${spacing[8]};

  @media screen and (min-width: ${breakpoints.desktop}) {
    flex-direction: row-reverse;
    height: 100vh;
  }
`

export const AboutLeft = styled.article`
  @media screen and (min-width: ${breakpoints.desktop}) {
    width: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100%;
    background: no-repeat center/70% url('/waves.svg');
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
  width: 100%;
  display: flex;
  justify-content: center;
  flex-direction: column;
  gap: ${spacing[10]};

  @media screen and (min-width: ${breakpoints.desktop}) {
    height: 100vh;
  }
`
export const ProjectsList = styled.ul`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  gap: ${spacing[10]};

  @media screen and (min-width: ${breakpoints.desktop}) {
    justify-content: flex-start;
    gap: ${spacing[24]};
  }
`

export const ProjectContainer = styled.a`
  display: flex;
  align-items: center;
  flex-direction: column;
  gap: ${spacing[3]};
  width: 350px;
  text-decoration: none;

  @media screen and (min-width: ${breakpoints.desktop}) {
    &:hover {
      transition: 300ms ease-in-out;
      opacity: 0.6;
    }
  }
`

export const ProjectPreview = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`

export const ProjectContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${spacing[3]};
`

export const ProjectTitle = styled.span`
  display: flex;
  align-items: center;
  justify-content: space-between;

  p {
    color: ${colors.primary};
    font-size: ${font[18]};
  }
`

export const ProjectDescription = styled.p`
  font-size: ${font[14]};
  color: ${colors.light};
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
  width: 100%;

  border: 1px solid ${colors.primaryDark};
  padding: ${spacing[4]};
  border-radius: ${spacing[2]};

  display: flex;
  align-items: center;

  gap: ${spacing[4]};

  h3 {
    font-size: ${font[20]};
    font-weight: 500;
  }

  @media screen and (min-width: ${breakpoints.desktop}) {
    justify-content: space-between;
    padding: ${spacing[4]} ${spacing[6]};
    border-radius: ${spacing[3]};
    gap: ${spacing[6]};

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
    display: flex;
    border-radius: ${spacing[3]};
    border: 1px solid ${`${colors.light}20`};

    &:hover {
      transition: all 300ms ease-in-out;
      opacity: 0.6;
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
  width: 100%;
  justify-content: flex-start;
  display: flex;
  flex-direction: column;
  gap: ${spacing[10]};

  @media screen and (min-width: ${breakpoints.desktop}) {
    /* gap: ${spacing[4]}; */
    /* height: 100vh; */
    /* min-height: 100vh; */
    padding-top: ${spacing[4]};
    padding-bottom: ${spacing[10]};
  }
`

export const ContactBody = styled.article`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: ${spacing[6]};

  @media screen and (min-width: ${breakpoints.desktop}) {
    flex-direction: row;
    gap: 0;
    padding: ${spacing[8]};
    justify-content: space-between;
  }
`

export const ContactForm = styled.form`
  width: 100%;

  padding: ${spacing[6]};
  border: 1px solid ${colors.light};
  border-radius: ${spacing[3]};

  display: flex;
  flex-direction: column;
  gap: ${spacing[5]};

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
  display: flex;
  flex-direction: column;
  gap: ${spacing[10]};
  align-items: center;
  justify-content: center;
  padding-bottom: ${spacing[10]};

  nav {
    display: flex;
    align-items: baseline;
    gap: ${spacing[6]};
    justify-content: center;
    text-align: center;
  }

  a {
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    background-color: ${colors.primary};
    padding: ${spacing[3]};
    border-radius: 50%;

    &:hover {
      transition: 300ms ease-in-out;
      opacity: 0.6;
    }
  }

  @media screen and (min-width: 1366px) {
    /* height: 100vh; */

    padding-bottom: 0;
    gap: ${spacing[6]};
    nav {
      gap: ${spacing[16]};
    }
  }
`
