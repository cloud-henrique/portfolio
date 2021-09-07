import React from 'react'
import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import { ChevronsDown } from 'react-feather'

import theme from './../styles/theme'
import Button from '../components/Button'
import { ButtonSizes } from '../constants/ButtonSizes'
import trianglesImg from './../assets/img/triangles.svg'
import wavesImg from './../assets/img/waves.svg'
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
} from '../styles/pages/Home'

const Home: NextPage = () => {
  const { colors } = theme

  const Home = () => (
    <HomeContainer>
      <HeroLeft>
        <TitleContainer>
          <h1>Toda boa ideia merece um bom código,</h1>
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
      <ChevronsDown color={colors.light} />
    </HomeContainer>
  )

  const About = () => (
    <AboutContainer>
      <AboutLeft>
        <Image
          alt='Homem pardo de óculos e barba, sorrindo para a frente'
          src={avatarImg}
          width='150'
          height='150'
          layout='fixed'
        />
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
            Atualmente sou desenvolvedor full-stack em uma startup de tecnologia que tem como principal produto uma
            plataforma de delivery. Minha stack principal é JavaScript (ReactJS, React Native e Vue.js), mas já
            implementei algumas coisas na faculdade em C++, Java e Python.
          </p>
        </TextContainer>
      </AboutRight>
    </AboutContainer>
  )

  const Projects = () => (
    <ProjectsContainer>
      <TitleContainer>
        <h2>Meus Projetos</h2>
      </TitleContainer>
      <TextContainer>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores laudantium doloremque consequatur. Vitae
        itaque harum magnam deleniti quam eius esse labore earum necessitatibus inventore. Aperiam, dolorem. Quidem
        eveniet quo consectetur!
      </TextContainer>
    </ProjectsContainer>
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
      </Container>
    </>
  )
}

export default Home
