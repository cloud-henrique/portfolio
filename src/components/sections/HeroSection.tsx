import Link from 'next/link'
import { ArrowRight, Briefcase, Code, Cpu } from 'react-feather'

export function HeroSection() {
  const signals = [
    { icon: Briefcase, label: 'Produto e operação' },
    { icon: Code, label: 'Frontend, backend e dados' },
    { icon: Cpu, label: 'Automação e IA pragmática' },
  ]

  return (
    <section
      id='hero'
      className='container mx-auto grid min-h-[calc(100svh-4rem)] items-center gap-10 py-20 md:min-h-[calc(100vh-5rem)] md:grid-cols-[1.15fr_0.85fr] md:gap-12 md:py-24'
    >
      <div className='max-w-4xl'>
        <p className='mb-4 text-xs font-semibold uppercase tracking-[0.18em] text-primary-700 dark:text-primary-300 sm:text-sm'>
          Fullstack Developer
        </p>
        <h1 className='text-[2.35rem] font-bold leading-[1.08] text-gray-950 dark:text-gray-50 sm:text-5xl md:text-6xl md:leading-tight'>
          Desenvolvo sistemas web de ponta a ponta, com foco em produto, operação e manutenção real.
        </h1>
        <p className='mt-6 max-w-3xl text-base leading-7 text-gray-700 dark:text-gray-300 sm:text-lg md:text-xl md:leading-8'>
          Fullstack Developer com +4 anos de experiência em Angular, Laravel, Next.js, Docker e automação de workflows.
          Atuo entre frontend, backend, banco de dados, infraestrutura e integrações.
        </p>

        <div className='mt-9 flex flex-wrap gap-3 sm:gap-4'>
          <Link href='#cases' className='btn-primary'>
            Ver cases
            <ArrowRight className='ml-2 h-5 w-5' />
          </Link>
          <Link href='#contact' className='btn-secondary'>
            Entrar em contato
          </Link>
        </div>
      </div>

      <aside className='border-l-2 border-primary-700/60 pl-5 dark:border-primary-300/70 md:pl-7'>
        <p className='text-sm font-semibold uppercase tracking-[0.16em] text-gray-500 dark:text-gray-400'>Atuação</p>
        <div className='mt-6 grid gap-5'>
          {signals.map(signal => (
            <div
              key={signal.label}
              className='flex items-start gap-4 border-b border-gray-950/10 pb-5 last:border-b-0 last:pb-0 dark:border-white/10'
            >
              <signal.icon className='mt-0.5 h-5 w-5 shrink-0 text-primary-700 dark:text-primary-300' />
              <span className='font-medium leading-6 text-gray-900 dark:text-gray-100'>{signal.label}</span>
            </div>
          ))}
        </div>
      </aside>
    </section>
  )
}
