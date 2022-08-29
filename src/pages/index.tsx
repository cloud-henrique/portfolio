import React from 'react'
import Head from 'next/head'
import Image from 'next/image'
import { ExternalLink, GitHub, Linkedin, Send, Mail } from 'react-feather'

import { Links } from '../constants/Links'
import { Jobs } from '../constants/Jobs'
import { ButtonSizes } from '../constants/ButtonSizes'

import { Button } from '../components/Button'

import { theme } from '../styles/theme'
import avatarImg from '../assets/img/avatar.png'
import illustrationImg from '../assets/img/illustration.svg'

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
  ContactContainer,
  ContactBody,
  ContactForm,
  ContactFooter,
  ContactLabel,
} from '../styles/pages/Home'

export default function Home() {
  const { colors, spacing } = theme
  const { projects } = Links

  return (
    <>
      <Head>
        <title>Cláudio Henrique</title>
      </Head>

      <Container>
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
            <Image
              alt='abstract minimalist illustration'
              src={illustrationImg}
              width='400'
              height='480'
            />
          </HeroRight>
        </HomeContainer>

        <AboutContainer id='about'>
          <AboutLeft>
            <Image
              alt='Homem pardo de óculos e barba, sorrindo'
              src={avatarImg}
              width='256'
              height='256'
              layout='fixed'
            />
          </AboutLeft>
          <AboutRight>
            <TitleContainer>
              <h2>Olá, meu nome é Cláudio Henrique!</h2>
              <h3>e eu sou desenvolvedor front-end e mobile 😉</h3>
            </TitleContainer>
            <TextContainer>
              <p>
                Estou cursando Ciência da Computação no Instituto Federal do
                Sudeste de Minas Gerais - Campus Rio Pomba. Acredito que a
                tecnologia é um bem universal e deve ser acessível a todas as
                pessoas, de modo que possam usufruir dela independentemente de
                qualquer fator.
              </p>
              <p>
                Atualmente sou desenvolvedor front-end React.js em uma startup
                cujo produto principal é uma plataforma de controle de saúde
                para animais de estimação. Minha stack principal é JavaScript
                (ReactJS, React Native e Vue.js), mas já implementei algumas
                coisas na faculdade em C++, Java e Python.
              </p>
            </TextContainer>
          </AboutRight>
        </AboutContainer>

        <ProjectsContainer id='projects'>
          <TitleContainer>
            <h2>Meus Projetos</h2>
          </TitleContainer>
          <ProjectsList>
            {projects.map(project => (
              <ProjectContainer
                key={project.key}
                href={project.href}
                target='_blank'
              >
                <ProjectPreview>
                  <StyledImage
                    src={project.media}
                    alt={project.title}
                    width={320}
                    height={200}
                  />
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

        <ExperiencesContainer id='experiences'>
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
                  <StyledImage
                    alt={job.company}
                    src={job.media}
                    width={180}
                    height={180}
                  />
                </ExperienceMedia>
              </ExperienceContainer>
            ))}
          </ExperiencesList>
        </ExperiencesContainer>

        <ContactContainer id='contact'>
          <TitleContainer>
            <h2>Contato</h2>
          </TitleContainer>

          <ContactBody>
            <TextContainer growOnDesktop>
              <p>
                Este é o meu primeiro ano desenvolvendo soluções tecnológicas.
                <br />
                Dê um voto de confiança e entre em contato comigo para
                conversarmos!
              </p>
              <p>
                <b>
                  Preencha os detalhes e entrarei em contato assim que possível.
                </b>
              </p>
            </TextContainer>
            <ContactForm>
              <ContactLabel htmlFor='name'>
                <p>Seu nome</p>
                <input
                  required
                  disabled
                  id='name'
                  type='text'
                  placeholder='Insira seu nome aqui'
                />
              </ContactLabel>
              <ContactLabel htmlFor='email'>
                <p>Seu e-mail</p>
                <input
                  required
                  disabled
                  id='email'
                  type='email'
                  placeholder='Insira seu e-mail aqui'
                />
              </ContactLabel>
              <ContactLabel htmlFor='message'>
                <p>Mensagem</p>
                <textarea
                  rows={5}
                  required
                  disabled
                  id='message'
                  placeholder='Insira sua mensagem aqui...'
                />
              </ContactLabel>
              <Button
                onClick={() =>
                  console.log(
                    'essa funcionalidade ainda não foi implementada :('
                  )
                }
              >
                Enviar mensagem
              </Button>
            </ContactForm>
          </ContactBody>

          <ContactFooter>
            <TextContainer growOnDesktop>
              <p>Ou você pode me acompanhar por aqui também:</p>
            </TextContainer>
            <nav>
              <a
                href={Links.github}
                title='Veja meus códigos no GitHub'
                target='_blank'
                rel='noopener noreferrer'
              >
                <GitHub size={spacing[6]} color={colors.dark} />
              </a>
              <a
                href={Links.linkedin}
                title='Conectar no LinkedIn'
                target='_blank'
                rel='noopener noreferrer'
              >
                <Linkedin size={spacing[6]} color={colors.dark} />
              </a>
              <a
                href={Links.telegram}
                title='Conversar no Telegram'
                target='_blank'
                rel='noopener noreferrer'
              >
                <Send size={spacing[6]} color={colors.dark} />
              </a>
              <a
                href={Links.email}
                title='Enviar e-mail'
                target='_blank'
                rel='noopener noreferrer'
              >
                <Mail size={spacing[6]} color={colors.dark} />
              </a>
            </nav>
          </ContactFooter>
        </ContactContainer>
      </Container>
    </>
  )
}
