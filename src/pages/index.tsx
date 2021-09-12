import React from 'react'
import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import { ChevronsDown, ExternalLink } from 'react-feather'

import Links from './../constants/Links'
import Jobs from '../constants/Jobs'
import theme from './../styles/theme'
import Button from '../components/Button'
import { ButtonSizes } from '../constants/ButtonSizes'
import trianglesImg from './../assets/img/triangles.svg'
import avatarImg from './../assets/img/avatar.png'
import {
  Container,
  HomeContainer,
  HeroLeft,
  TitleContainer,
  CTAContainer,
  HeroRight,
  AboutContainer,
  AboutLeft,
  AboutRight,
  TextContainer,
  ProjectsContainer,
  ProjectContainer,
  ProjectPreview,
  ProjectContent,
  ProjectTitle,
  ProjectDescription,
  ProjectsList,
  ExperiencesContainer,
  ExperiencesList,
  ExperienceContainer,
  ExperienceContent,
  ExperienceMedia,
  StyledImage,
} from '../styles/pages/Home'

const Home: NextPage = () => {
  const { colors } = theme

  const Home = () => (
    <HomeContainer>
      <HeroLeft>
        <TitleContainer>
          <h1>Toda boa ideia merece um bom código</h1>
          <h3>e acredito que eu possa te ajudar nisso.</h3>
        </TitleContainer>

        <CTAContainer>
          <Button desktopSize={ButtonSizes.md} href='#contact'>
            Contato
          </Button>
          <Button desktopSize={ButtonSizes.md} href='#projects' outline>
            Projetos
          </Button>
        </CTAContainer>
      </HeroLeft>
      <HeroRight>
        <Image alt='abstract minimalist illustration' src={trianglesImg} width='300' height='244' />
      </HeroRight>
      {/* <ChevronsDown color={colors.light} /> */}
    </HomeContainer>
  )

  const About = () => (
    <AboutContainer>
      <AboutLeft>
        <Image alt='Homem pardo de óculos e barba, sorrindo' src={avatarImg} width='256' height='256' layout='fixed' />
      </AboutLeft>
      <AboutRight>
        <TitleContainer>
          <h2>Olá, meu nome é Cláudio Henrique!</h2>
          <h3>e eu sou desenvolvedor full-stack 😉</h3>
        </TitleContainer>
        <TextContainer>
          <p>
            Estou cursando Ciência da Computação no Instituto Federal do Sudeste de Minas Gerais – Campus Rio Pomba.
            Acredito que a tecnologia é um bem universal e deve ser acessível a todas as pessoas, de modo que possam
            usufruir dela independentemente de qualquer fator.
          </p>
          <p>
            Atualmente sou desenvolvedor mobile React Native em uma HR Tech cujo produto é uma plataforma integrada para
            gestão de pessoas e organizações. Minha stack principal é JavaScript (ReactJS, React Native e Vue.js), mas
            já implementei algumas coisas na faculdade em C++, Java e Python.
          </p>
        </TextContainer>
      </AboutRight>
    </AboutContainer>
  )

  const Projects = () => {
    const { projects } = Links
    return (
      <ProjectsContainer>
        <TitleContainer>
          <h2>Meus Projetos</h2>
        </TitleContainer>
        <ProjectsList>
          {projects.map(project => (
            <ProjectContainer key={project.key} href={project.href}>
              <ProjectPreview>
                <StyledImage src={project.media} alt={`Projeto ${project.title}`} width={350} height={197.05} />
              </ProjectPreview>
              <ProjectContent>
                <ProjectTitle>
                  <p>{project.title}</p>
                  <ExternalLink size={24} color={colors.primary} />
                </ProjectTitle>
                <ProjectDescription>{project.description}</ProjectDescription>
              </ProjectContent>
            </ProjectContainer>
          ))}
        </ProjectsList>
      </ProjectsContainer>
    )
  }

  const Experiences = () => (
    <ExperiencesContainer>
      <TitleContainer>
        <h2>Experiências</h2>
      </TitleContainer>
      <ExperiencesList>
        {Jobs.map(job => (
          <ExperienceContainer key={job.id}>
            <ExperienceContent>
              <h3>{job.title}</h3>
              <TextContainer>
                <p>{job.description}</p>
              </TextContainer>
            </ExperienceContent>
            <ExperienceMedia href={job.href}>
              <StyledImage alt={`Empresa ${job.company}`} src={job.media} width={180} height={180} />
            </ExperienceMedia>
          </ExperienceContainer>
        ))}
      </ExperiencesList>
    </ExperiencesContainer>
  )

  return (
    <>
      <Head>
        <title>Cláudio Henrique</title>
      </Head>

      <Container>
        <Home />

        <About />

        <Projects />

        <Experiences />
      </Container>
    </>
  )
}

export default Home
