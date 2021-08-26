import type { NextPage } from 'next'
import Head from 'next/head'

import { Container, TitleContainer, CTAContainer, ButtonPrimary, ButtonSecondary } from '../styles/pages/Home'

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Home</title>
      </Head>
      <Container>
        {/* <main> */}
        <section>
          <TitleContainer>
            <h1>Toda boa ideia merece um bom código,</h1>
            <h2>e acredito que eu possa te ajudar nisso.</h2>
          </TitleContainer>

          <CTAContainer>
            <ButtonPrimary type='button'>Contato</ButtonPrimary>
            <ButtonSecondary type='button'>Projetos</ButtonSecondary>
          </CTAContainer>
        </section>
        {/* </main> */}
      </Container>
    </>
  )
}

export default Home
