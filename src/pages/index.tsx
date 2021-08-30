import type { NextPage } from 'next'
import Head from 'next/head'

import Button from '../components/Button'
import { Container, TitleContainer, CTAContainer } from '../styles/pages/Home'

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Cláudio Henrique</title>
      </Head>
      <Container>
        <section>
          <TitleContainer>
            <h1>Toda boa ideia merece um bom código,</h1>
            <h2>e acredito que eu possa te ajudar nisso.</h2>
          </TitleContainer>

          <CTAContainer>
            <Button href='#contact'>Contato</Button>
            <Button href='#projects' outline>
              Projetos
            </Button>
          </CTAContainer>
        </section>
      </Container>
    </>
  )
}

export default Home
