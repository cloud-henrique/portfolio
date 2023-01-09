import { useRef } from 'react'

import Image from 'next/image'
import Lottie from 'lottie-react'
import { ArrowDownCircle, Mail, GitHub, Linkedin, Twitter } from 'react-feather'

import { Head } from 'components/Head'

import laptopAnimation from 'assets/programming-computer.json'

const iconsClass = 'h-8 w-8 animate-pulse'

function Hero() {
  const scrollRef = useRef<null | HTMLElement>(null)

  return (
    <>
      <section id='hero' className='flex flex-col md:flex-row items-center hero'>
        <article className='mt-24 md:mt-0 text-center md:text-left md:w-1/2'>
          <h1 className='font-bold text-4xl md:text-5xl text-gray-900 dark:text-primary-300'>
            Toda boa ideia merece <br /> um bom código
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

function About() {
  return (
    <section>
      <Image
        width={256}
        height={256}
        className='rounded-full'
        src='/static/img/claudio-henrique.png'
        alt='Homem pardo de óculos, cabelo afro e barba, olhando pra uma tartaruga de brinquedo que está em sua cabeça'
      />
    </section>
  )
}

export default function Home() {
  return (
    <>
      <Head title='Cláudio Henrique' />

      <div className='transition-all duration-300 flex-col px-6 md:px-14 bg-gray-50 dark:bg-gray-900'>
        <Hero />
        <About />
      </div>
    </>
  )
}
