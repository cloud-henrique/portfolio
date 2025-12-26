'use client'

import { useRef } from 'react'
import Lottie from 'lottie-react'
import Image from 'next/image'
import Link from 'next/link'
import { ArrowDownCircle, ExternalLink, GitHub, Linkedin, Mail, Send } from 'react-feather'
import laptopAnimation from '@/assets/programming-computer.json'

function Hero({ scrollRef }: { scrollRef: React.RefObject<HTMLElement> }) {
  const socials = [
    {
      icon: Mail,
      href: 'mailto: 00claudio.henrique@gmail.com',
      label: 'Acessar o e-mail',
    },
    {
      icon: GitHub,
      href: 'https://github.com/cloud-henrique',
      label: 'Acessar o GitHub',
    },
    {
      icon: Linkedin,
      href: 'https://linkedin.com/in/cloud-henrique',
      label: 'Acessar o LinkedIn',
    },
    {
      icon: Send,
      href: 'https://t.me/cloud_henrique',
      label: 'Acessar o Telegram',
    },
  ]

  return (
    <>
      <section id='hero' className='container mx-auto flex flex-col md:flex-row items-center hero'>
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
                <social.icon className='h-8 w-8 animate-pulse' />
              </Link>
            ))}
          </span>

          <div className='mt-16 flex flex-col md:flex-row gap-6'>
            <Link href='#contact' className='btn-primary'>
              Contato
            </Link>
            <Link href='#projects' className='btn-secondary'>
              Projetos
            </Link>
          </div>
        </article>

        <article className='hidden md:flex w-1/2'>
          <Lottie animationData={laptopAnimation} loop />
        </article>
      </section>

      <span className='flex items-center justify-center mt-10 md:-mt-10'>
        <ArrowDownCircle
          onClick={() => scrollRef?.current?.scrollIntoView()}
          className='h-8 w-8 text-primary-500 dark:text-emerald-500 animate-bounce cursor-pointer'
        />
      </span>
    </>
  )
}

function About({ scrollRef }: { scrollRef: React.RefObject<HTMLElement> }) {
  return (
    <section
      ref={scrollRef}
      id='about'
      className='container mx-auto flex flex-col md:flex-row-reverse items-center py-20 md:py-0 md:min-h-screen'
    >
      <article className='md:w-1/2 md:flex md:justify-center'>
        <Image
          alt='Cláudio Henrique'
          src='/static/img/claudio-henrique.jpeg'
          width={256}
          height={256}
          className='rounded-full w-32 h-32 md:w-64 md:h-64'
          priority
        />
      </article>

      <article className='md:w-1/2 mt-8 mb-6'>
        <h2 className='text-center md:text-left font-bold text-3xl md:text-5xl text-gray-900 dark:text-gray-300'>
          Olá, meu nome é <br /> <span className='text-primary-500 dark:text-primary-300'>Cláudio Henrique</span>!
        </h2>
        <p className='text-gray-700 dark:text-gray-400 mt-6 md:mt-12'>
          Desenvolvedor Fullstack com 4+ anos de experiência em aplicações web e mobile, atualmente em Juiz de Fora -
          MG. Cursei Ciência da Computação no Instituto Federal do Sudeste de Minas Gerais (2018-2022).
          <br /> <br />
          Especializado em criar soluções modernas e acessíveis para healthtech, HR tech e delivery. Minha stack
          principal inclui TypeScript, React.js, Next.js, React Native, Angular, Laravel e PHP. Utilizo ferramentas de
          IA como Claude Code, Wispr Flow e AntiGravity para otimizar desenvolvimento e elevar a qualidade do código.
          <br /> <br />
          Acredito que tecnologia deve ser acessível a todos. Meu foco está em clean code, acessibilidade (a11y) e
          performance, criando produtos que realmente fazem diferença na vida das pessoas.
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
    <section id='projects' className='container mx-auto md:min-h-screen flex flex-col'>
      <h2 className='font-bold text-3xl md:text-5xl text-gray-900 dark:text-gray-300 text-center md:text-left mt-20'>
        Meus Projetos
      </h2>

      <ul className='mt-6 md:mt-20 flex gap-6 md:gap-16 flex-wrap justify-center md:justify-start'>
        {projects.map(project => (
          <li key={project.href}>
            <Link href={project.href} target='_blank' className='block w-80 cursor-pointer hover:animate-pulse'>
              <Image
                width={312}
                height={176}
                alt={project.alt}
                src={project.image}
                title={project.alt}
                className='rounded-lg'
              />
              <span className='flex w-full justify-between mt-2 md:mt-4 mb-3 md:mb-2'>
                <h3 className='font-bold text-xl text-gray-700 dark:text-primary-50'>{project.title}</h3>
                <ExternalLink className='w-6 h-6 text-gray-700 dark:text-primary-50' />
              </span>
              <p className='text-sm md:text-base text-gray-700 dark:text-gray-400'>{project.description}</p>
            </Link>
          </li>
        ))}
      </ul>
    </section>
  )
}

function Experiences() {
  const experiences = [
    {
      title: 'Fullstack Developer na Cia Cuidadores (2024 - o momento)',
      description:
        'Desenvolvedor fullstack responsável por todo o ciclo de desenvolvimento da plataforma de cuidados com idosos, atuando em frontend (Angular, TypeScript), backend (Laravel, PHP), banco de dados (MySQL) e automação (Docker, n8n, Groq LLM).',
      image: '/static/img/cia-cuidadores.jpg',
      link: 'https://guia.vet',
      alt: 'Guiavet',
    },
    {
      title: 'Desenvolvedor front-end e mobile na Guiavet (2022 - 2023)',
      description:
        'Durante 10 meses, desenvolvi funcionalidades e dei manutenção em plataformas web e mobile usando React, Django e React Native em uma startup especializada no controle de saúde e bem estar de animais de estimação.',
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
      title: 'Desenvolvedor front-end e mobile na LabCinco/Bigou Delivery (2021)',
      description:
        'Durante 7 meses, desenvolvi funcionalidades e dei manutenção em plataformas web e mobile usando Next, React, React Native e Vue em uma startup de tecnologia do Sudeste de Minas Gerais que tem como principal produto uma plataforma de delivery.',
      image: '/static/img/bigou.png',
      link: 'https://bigou.com.br',
      alt: 'Bigou Delivery',
    },
  ]

  return (
    <section id='experiences' className='container mx-auto md:min-h-screen'>
      <h2 className='font-bold text-3xl md:text-5xl text-gray-900 dark:text-gray-300 pt-20 mb-6 md:mb-10'>
        Experiências
      </h2>
      <ul className='flex flex-col gap-6'>
        {experiences.map(experience => (
          <li
            key={experience.image}
            className='flex flex-col md:flex-row rounded-lg p-4 md:p-8 border border-primary-500 dark:border-primary-300 shadow-md dark:shadow-white/20 lg:w-4/5 md:self-center'
          >
            <article className='flex flex-col gap-4 md:gap-6 md:w-3/5'>
              <h3 className='font-bold text-xl text-gray-900 dark:text-gray-300'>{experience.title}</h3>
              <p className='text-gray-700 dark:text-gray-400'>{experience.description}</p>
            </article>
            <Image
              alt={experience.alt}
              src={experience.image}
              width={160}
              height={160}
              className='rounded-lg hidden md:flex w-40 h-40 md:ml-auto self-center'
            />
          </li>
        ))}
      </ul>
    </section>
  )
}

function Contact() {
  const contacts = [
    {
      icon: GitHub,
      title: '💻 Caso queira ver meus códigos',
      href: 'https://github.com/cloud-henrique',
      link: 'github.com/cloud-henrique',
    },
    {
      icon: Linkedin,
      title: '🎩 Para um contato mais profissional',
      href: 'https://linkedin.com/in/cloud-henrique',
      link: 'linkedin.com/in/cloud-henrique',
    },
    {
      icon: Mail,
      title: '📫 Caso você seja old-school',
      href: 'mailto:00claudio.henrique@gmail.com',
      link: '00claudio.henrique@gmail.com',
    },
    {
      icon: Send,
      title: '👋🏽 Caso queira me dar um oi :)',
      href: 'https://t.me/cloud_henrique',
      link: 't.me/cloud_henrique',
    },
  ]

  return (
    <section id='contact' className='container mx-auto py-20'>
      <h2 className='mb-6 md:mb-20 font-bold text-3xl md:text-5xl text-gray-900 dark:text-gray-300 text-center md:text-left'>
        Contato
      </h2>
      <ul className='grid gap-6 md:grid-cols-2 md:grid-rows-2 md:gap-20'>
        {contacts.map(contact => (
          <li key={contact.href} className='flex flex-col gap-3 items-center justify-center text-center'>
            <p className='text-gray-900 dark:text-gray-400'>{contact.title}</p>
            <a
              target='_blank'
              rel='noreferrer'
              href={contact.href}
              className='flex rounded-lg bg-gradient-to-b p-[2px] w-full md:w-80 from-primary-500 to-primary-500/80 dark:from-primary-300 dark:to-primary-300/50 hover:shadow-md hover:dark:shadow-white/20 transition-all'
            >
              <div className='flex gap-3 items-center justify-center bg-gray-50 dark:bg-gray-900 w-full md:w-80 rounded-md p-3'>
                <contact.icon className='w-6 h-6 text-primary-500 dark:text-primary-300' />
                <p className='text-transparent bg-clip-text bg-gradient-to-b from-primary-500 to-primary-500/80 dark:from-primary-300 dark:to-primary-300/50'>
                  {contact.link}
                </p>
              </div>
            </a>
          </li>
        ))}
      </ul>
    </section>
  )
}

export default function Home() {
  const scrollRef = useRef<null | HTMLElement>(null)

  return (
    <div className='transition-all duration-300 flex-col px-6 md:px-14 bg-gray-50 dark:bg-gray-900'>
      <Hero scrollRef={scrollRef} />
      <About scrollRef={scrollRef} />
      <Projects />
      <Experiences />
      <Contact />
    </div>
  )
}
