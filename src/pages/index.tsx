/* eslint-disable max-len */
/* eslint-disable @next/next/no-img-element */
import { useRef } from 'react'

import Lottie from 'lottie-react'
import { ArrowDownCircle, Mail, GitHub, Linkedin, Twitter } from 'react-feather'

import { Head } from 'components/Head'

import laptopAnimation from 'assets/programming-computer.json'
import Image from 'next/image'

const iconsClass = 'h-8 w-8 animate-pulse'

function Hero({ scrollRef }: any) {
  return (
    <>
      <section id='hero' className='flex flex-col md:flex-row items-center hero'>
        <article className='mt-24 md:mt-0 text-center md:text-left md:w-1/2'>
          <h1 className='font-bold text-4xl md:text-5xl text-gray-900 dark:text-primary-300'>
            Toda boa ideia merece um bom código
          </h1>
          <p className='my-10 md:mt-6 md:mb-16 text-gray-700 dark:text-gray-400 md:text-2xl'>
            e acredito que eu possa te ajudar nisso.
          </p>

          <span className='flex md:hidden gap-10 justify-center text-primary-500 dark:text-primary-300'>
            <Mail className={iconsClass} />
            <GitHub className={iconsClass} />
            <Linkedin className={iconsClass} />
            <Twitter className={iconsClass} />
          </span>

          <div className='mt-16 flex flex-col md:flex-row gap-6'>
            <button type='button' className='btn-primary'>
              Contato
            </button>
            <button type='button' className='btn-secondary'>
              Projetos
            </button>
          </div>
        </article>

        <article className='hidden md:flex w-1/2'>
          <Lottie animationData={laptopAnimation} loop />
        </article>
      </section>

      <span className='flex mt-10 md:-mt-10 items-center justify-center justify-self-end'>
        <ArrowDownCircle
          onClick={() => scrollRef?.current?.scrollIntoView()}
          className='h-8 w-8 text-primary-500 dark:text-emerald-500 animate-bounce cursor-pointer'
        />
      </span>
    </>
  )
}

function About({ scrollRef }: any) {
  return (
    <section ref={scrollRef} id='about' className='flex flex-col md:flex-row-reverse items-center pt-20 pb-6'>
      <article className='md:w-1/2 md:flex md:justify-center'>
        <Image
          alt='Cláudio Henrique'
          src='/static/img/claudio-henrique.png'
          className='rounded-full'
          height={192}
          width={192}
        />
      </article>

      <article className='md:w-1/2'>
        <h2 className='mt-8 mb-6 text-center md:text-left font-bold text-3xl md:text-5xl text-gray-900 dark:text-gray-300'>
          Olá, meu nome é <br /> <span className='text-primary-500 dark:text-primary-300'>Cláudio Henrique</span>!
        </h2>
        <p className='text-gray-700 dark:text-gray-400'>
          Sou desenvolvedor front-end e mobile morando em Rio Pomba - MG, e estou cursando Ciência da Computação no
          Instituto Federal do Sudeste de Minas Gerais.
          <br /> <br />
          Acredito que a tecnologia é um bem universal e deve ser acessível a todas as pessoas. Programo
          profissionalmente há quase 2 anos e atualmente trabalho com React e React Native (e estudando um pouco de
          UI/UX também).
        </p>
      </article>
    </section>
  )
}

export default function Home() {
  const scrollRef = useRef<null | HTMLElement>(null)

  return (
    <>
      <Head title='Cláudio Henrique' />

      <div className='transition-all duration-300 flex-col px-6 md:px-14 bg-gray-50 dark:bg-gray-900'>
        <Hero scrollRef={scrollRef} />
        <About scrollRef={scrollRef} />
      </div>
    </>
  )
}
