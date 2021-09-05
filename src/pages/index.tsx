import type { NextPage } from 'next';
import Head from 'next/head';
import Image from 'next/image';

import Button from '../components/Button';
import { ButtonSizes } from '../constants/ButtonSizes';
import { Container, Hero, HeroLeft, HeroRight, TitleContainer, CTAContainer } from '../styles/pages/Home';
import heroImg from './../assets/img/hero.svg';

const Home: NextPage = () => {
  const HeroSection = () => (
    <Hero>
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
        <Image alt='abstract minimalist illustration' src={heroImg} width='443' height='607' />
      </HeroRight>
    </Hero>
  );

  return (
    <>
      <Head>
        <title>Cláudio Henrique</title>
      </Head>

      <Container>
        <HeroSection />
      </Container>
    </>
  );
};

export default Home;
