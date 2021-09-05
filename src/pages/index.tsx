import React from 'react';
import type { NextPage } from 'next';
import Head from 'next/head';
import Image from 'next/image';

import Button from '../components/Button';
import { ButtonSizes } from '../constants/ButtonSizes';
import trianglesImg from './../assets/img/triangles.svg';
import wavesImg from './../assets/img/waves.svg';
import avatarImg from './../assets/img/avatar.png';
import {
  Container,
  HomeContainer,
  HeroLeft,
  TitleContainer,
  CTAContainer,
  HeroRight,
  AboutContainer,
  AboutLeft,
} from '../styles/pages/Home';

const Home: NextPage = () => {
  const Home = () => (
    <HomeContainer>
      <HeroLeft>
        <TitleContainer>
          <h1>Toda boa ideia merece um bom código,</h1>
          <h2>e acredito que eu possa te ajudar nisso.</h2>
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
    </HomeContainer>
  );

  const About = () => (
    <AboutContainer>
      <AboutLeft>
        <Image alt='Homem pardo de óculos e barba, sorrindo para a frente' src={avatarImg} width='150' height='150' />
      </AboutLeft>
    </AboutContainer>
  );

  return (
    <>
      <Head>
        <title>Cláudio Henrique</title>
      </Head>

      <Container>
        <Home />

        <About />
      </Container>
    </>
  );
};

export default Home;
