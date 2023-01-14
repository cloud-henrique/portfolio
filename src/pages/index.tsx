/* eslint-disable max-len */
/* eslint-disable @next/next/no-img-element */
import { useRef } from 'react'

import Lottie from 'lottie-react'
import Image from 'next/image'
import Link from 'next/link'
import { ArrowDownCircle, ExternalLink, GitHub, Linkedin, Mail, Twitter } from 'react-feather'

import { Head } from 'components/Head'

import laptopAnimation from 'assets/programming-computer.json'

function Hero({ scrollRef }: any) {
  const socials = [
    {
      icon: Mail,
      className: 'h-8 w-8 animate-pulse',
      href: 'mailto: 00claudio.henrique@gmail.com',
      label: 'Acessar o e-mail',
    },
    {
      icon: GitHub,
      className: 'h-8 w-8 animate-pulse',
      href: 'https://github.com/cloud-henrique',
      label: 'Acessar o GitHub',
    },
    {
      icon: Linkedin,
      className: 'h-8 w-8 animate-pulse',
      href: 'https://linkedin.com/in/cloud-henrique',
      label: 'Acessar o LinkedIn',
    },
    {
      icon: Twitter,
      className: 'h-8 w-8 animate-pulse',
      href: 'https://twitter.com/cloud_henrique',
      label: 'Acessar o Twitter',
    },
  ]

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
            {socials.map(social => (
              <Link key={social.label} href={social.href} target='_blank'>
                <social.icon className={social.className} />
              </Link>
            ))}
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

function Experiences() {
  const experiences = [
    {
      title: 'Desenvolvedor React.js na Guiavet (2022 - Atual)',
      description:
        'Desenvolvo funcionalidades para a plataforma web usando React.js em uma startup especializada no controle de saúde e bem estar de animais de estimação.',
      image: '/static/img/guiavet.png',
      link: 'https://guia.vet',
      alt: 'Guiavet',
    },
    {
      title: 'Desenvolvedor mobile na Mereo (2021 - 2022)',
      description:
        'Durante 11 meses, desenvolvi funcionalidades para o aplicativo principal usando React Native + TypeScript em uma HR Tech cujo produto é uma plataforma integrada para gestão de pessoas e organizações.',
      image: '/static/img/mereo.jpg',
      link: 'https://mereo.com',
      alt: 'Mereo',
    },
    {
      title: 'Desenvolvedor mobile e front-end na LabCinco/Bigou Delivery (2021)',
      description:
        'Durante 7 meses, desenvolvi funcionalidades e dei manutenção em plataformas web e mobile usando Next, React, React Native e Vue em uma startup de tecnologia do Sudeste de Minas Gerais que tem como principal produto uma plataforma de delivery.',
      image: '/static/img/bigou.png',
      link: 'https://bigou.com.br',
      alt: 'Bigou Delivery',
    },
  ]

  return (
    <section id='experiences' className='md:min-h-screen'>
      <h2 className='font-bold text-3xl md:text-5xl text-gray-900 dark:text-gray-300 pt-20 mb-6 md:mb-10'>
        Experiências
      </h2>
      <ul className='flex flex-col gap-6'>
        {experiences.map(experience => (
          <li
            key={experience.image}
            className='flex flex-col md:flex-row rounded-lg p-4 md:p-8 border border-primary-500 dark:border-primary-300 shadow-md dark:shadow-white/20'
          >
            <article className='flex flex-col gap-4 md:gap-6 md:pr-4'>
              <h3 className='font-bold text-xl text-gray-900 dark:text-gray-300'>{experience.title}</h3>
              <p className='text-gray-700 dark:text-gray-400'>{experience.description}</p>
            </article>
            <img
              alt={experience.alt}
              src={experience.image}
              className='rounded-lg hidden md:flex w-40 h-40 md:ml-auto self-center'
            />
          </li>
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
        <Experiences />
      </div>
    </>
  )
}
