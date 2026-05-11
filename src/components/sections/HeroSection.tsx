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
      className='container mx-auto grid min-h-[calc(100vh-5rem)] items-center gap-12 py-24 md:grid-cols-[1.15fr_0.85fr]'
    >
      <div>
        <p className='mb-5 text-sm font-semibold uppercase tracking-[0.18em] text-primary-700 dark:text-primary-300'>
          Fullstack Developer
        </p>
        <h1 className='max-w-4xl text-4xl font-bold leading-tight text-gray-950 dark:text-gray-50 md:text-6xl'>
          Desenvolvo sistemas web de ponta a ponta, com foco em produto, operação e manutenção real.
        </h1>
        <p className='mt-7 max-w-3xl text-lg leading-8 text-gray-700 dark:text-gray-300 md:text-xl'>
          Fullstack Developer com +4 anos de experiência em Angular, Laravel, Next.js, Docker e automação de workflows.
          Atuo entre frontend, backend, banco de dados, infraestrutura e integrações.
        </p>

        <div className='mt-10 flex flex-col gap-4 sm:flex-row'>
          <Link href='#cases' className='btn-primary'>
            Ver cases
            <ArrowRight className='ml-2 h-5 w-5' />
          </Link>
          <Link href='#contact' className='btn-secondary'>
            Entrar em contato
          </Link>
        </div>
      </div>

      <aside className='rounded-lg border border-gray-200 bg-white/70 p-6 shadow-sm dark:border-white/10 dark:bg-gray-900/70'>
        <p className='text-sm font-semibold uppercase tracking-[0.16em] text-gray-500 dark:text-gray-400'>Atuação</p>
        <div className='mt-6 grid gap-4'>
          {signals.map(signal => (
            <div
              key={signal.label}
              className='flex items-center gap-4 rounded-md border border-gray-200 bg-gray-50 p-4 dark:border-white/10 dark:bg-gray-950/60'
            >
              <signal.icon className='h-5 w-5 shrink-0 text-primary-700 dark:text-primary-300' />
              <span className='font-medium text-gray-900 dark:text-gray-100'>{signal.label}</span>
            </div>
          ))}
        </div>
      </aside>
    </section>
  )
}
