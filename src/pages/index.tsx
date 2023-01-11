import { useRef } from 'react'

import Lottie from 'lottie-react'
import Image from 'next/image'
import Link from 'next/link'
import { ArrowDownCircle, ExternalLink, GitHub, Linkedin, Mail, Twitter } from 'react-feather'

import { Head } from 'components/Head'

import laptopAnimation from 'assets/programming-computer.json'

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
            <Link href='#contact'>
              <button type='button' className='btn-primary'>
                Contato
              </button>
            </Link>
            <Link href='#projects'>
              <button type='button' className='btn-secondary'>
                Projetos
              </button>
            </Link>
          </div>
        </article>

        <article className='hidden md:flex w-1/2'>
          <Lottie animationData={laptopAnimation} loop />
        </article>
      </section>

      <span className='flex items-center justify-center justify-self-end mt-10 md:-mt-10'>
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
    <section
      ref={scrollRef}
      id='about'
      className='flex flex-col md:flex-row-reverse items-center py-20 md:py-0 md:min-h-screen'
    >
      <article className='md:w-1/2 md:flex md:justify-center'>
        <img
          alt='Cláudio Henrique'
          src='/static/img/claudio-henrique.png'
          className='rounded-full w-32 h-32 md:w-64 md:h-64'
        />
      </article>

      <article className='md:w-1/2 mt-8 mb-6'>
        <h2 className='text-center md:text-left font-bold text-3xl md:text-5xl text-gray-900 dark:text-gray-300'>
          Olá, meu nome é <br /> <span className='text-primary-500 dark:text-primary-300'>Cláudio Henrique</span>!
        </h2>
        <p className='text-gray-700 dark:text-gray-400 mt-6 md:mt-12'>
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

function Projects() {
  const projects = [
    {
      image: '/static/img/jasta.png',
      alt: 'Projeto de lista de tarefas',
      title: 'J.A.S.T.A.',
      href: 'https://jasta.vercel.app',
      description: 'Just Another Silly Todo App - Aplicação de lista de tarefas feita em React.js.',
    },
    {
      image: '/static/img/lyrics-search.png',
      alt: 'Buscador de letras de músicas',
      title: 'Lyrics Search',
      href: 'https://lyricssearch.vercel.app',
      description: 'Site para pesquisar letras de músicas consumindo uma API externa.',
    },
    {
      image: '/static/img/techflix.png',
      alt: 'Plataforma de vídeos com conteúdos sobre tecnologia',
      title: 'Techflix',
      href: 'https://techflix.01ch01.vercel.app',
      description: 'Plataforma de vídeos recomendados para iniciantes em programação ou entusiastas de tecnologias.',
    },
  ]

  return (
    <section id='projects' className='md:min-h-screen flex flex-col'>
      <h2 className='font-bold text-3xl md:text-5xl text-gray-900 dark:text-gray-300 text-center md:text-left mt-20'>
        Meus Projetos
      </h2>

      <ul className='mt-6 md:mt-20 flex gap-6 md:gap-16 flex-wrap'>
        {projects.map(project => (
          <Link key={project.href} href={project.href} target='_blank'>
            <li className='w-80 cursor-pointer hover:animate-pulse'>
              <Image
                width={312}
                height={176}
                alt={project.alt}
                src={project.image}
                title={project.alt}
                className='rounded-lg'
              />
              <span className='flex  w-full justify-between mt-2 md:mt-4 mb-3 md:mb-2'>
                <h3 className='font-bold text-xl text-gray-700 dark:text-primary-50'>{project.title}</h3>
                <ExternalLink className='w-6 h-6 text-gray-700 dark:text-primary-50' />
              </span>
              <p className='text-sm md:text-base text-gray-700 dark:text-gray-400'>{project.description}</p>
            </li>
          </Link>
        ))}
      </ul>
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
        <Projects />
      </div>
    </>
  )
}
