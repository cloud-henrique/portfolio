import Image from 'next/image'
import Link from 'next/link'
import { ExternalLink } from 'react-feather'
import { cases } from '@/data/profile'
import { Badge } from '@/components/ui/Badge'
import { SectionHeading } from '@/components/ui/SectionHeading'

export function CasesSection() {
  const [featuredCase, ...secondaryCases] = cases

  return (
    <section id='cases' className='container mx-auto py-24'>
      <SectionHeading
        eyebrow='Cases selecionados'
        title='Poucos cases, mais contexto.'
        description='Uma seleção focada em sistemas web reais, atuação profissional e direção técnica em desenvolvimento.'
      />

      <div className='mt-12 grid gap-6 lg:grid-cols-[1.35fr_0.9fr]'>
        <article className='flex h-full flex-col bg-white p-6 ring-1 ring-gray-200 transition-colors hover:ring-primary-700/40 dark:bg-graphite dark:ring-white/10 dark:hover:ring-primary-300/40 sm:p-8'>
          <div className='mb-6 flex items-start justify-between gap-4'>
            <Badge>{featuredCase.status}</Badge>
            {featuredCase.href && (
              <Link
                href={featuredCase.href}
                target='_blank'
                rel='noreferrer'
                aria-label={`Abrir ${featuredCase.title}`}
                className='text-primary-700 transition-colors hover:text-primary-900 dark:text-primary-300 dark:hover:text-primary-100'
              >
                <ExternalLink className='h-5 w-5' />
              </Link>
            )}
          </div>

          <p className='mb-3 text-sm font-semibold uppercase tracking-[0.16em] text-primary-700 dark:text-primary-300'>
            Case principal
          </p>
          <h3 className='text-3xl font-bold text-gray-950 dark:text-gray-50 md:text-4xl'>{featuredCase.title}</h3>
          <p className='mt-2 text-lg font-medium text-gray-800 dark:text-gray-200'>{featuredCase.subtitle}</p>
          <p className='mt-6 max-w-2xl leading-8 text-gray-700 dark:text-gray-300'>{featuredCase.description}</p>
          <p className='mt-5 max-w-2xl leading-7 text-gray-700 dark:text-gray-300'>
            <strong className='text-gray-950 dark:text-gray-50'>Atuação: </strong>
            {featuredCase.role}
          </p>

          {featuredCase.image && (
            <div className='relative mt-8 aspect-[3/1] overflow-hidden border border-primary-700/15 bg-primary-700/5 dark:border-primary-300/15 dark:bg-primary-300/5'>
              <Image
                src={featuredCase.image.src}
                alt={featuredCase.image.alt}
                fill
                sizes='(min-width: 1024px) 48vw, 100vw'
                className='object-cover'
              />
            </div>
          )}

          <div className='pt-6'>
            <p className='text-sm font-semibold uppercase tracking-[0.16em] text-gray-500 dark:text-gray-400'>
              Stack aplicada
            </p>
            <p className='mt-3 leading-7 text-gray-800 dark:text-gray-200'>{featuredCase.stack.join(' / ')}</p>
          </div>
        </article>

        <div className='grid gap-6'>
          {secondaryCases.map(projectCase => (
            <article
              key={projectCase.title}
              className='flex h-full flex-col border-t border-gray-200 py-6 transition-colors hover:border-primary-700/50 dark:border-white/10 dark:hover:border-primary-300/50 lg:first:border-t-0 lg:first:pt-0'
            >
              <div className='mb-5 flex items-start justify-between gap-4'>
                <Badge>{projectCase.status}</Badge>
                {projectCase.href && (
                  <Link
                    href={projectCase.href}
                    target='_blank'
                    rel='noreferrer'
                    aria-label={`Abrir ${projectCase.title}`}
                    className='text-primary-700 transition hover:text-primary-900 dark:text-primary-300 dark:hover:text-primary-100'
                  >
                    <ExternalLink className='h-5 w-5' />
                  </Link>
                )}
              </div>

              <h3 className='text-2xl font-bold text-gray-950 dark:text-gray-50'>{projectCase.title}</h3>
              <p className='mt-1 font-medium text-primary-800 dark:text-primary-200'>{projectCase.subtitle}</p>
              <p className='mt-5 leading-7 text-gray-700 dark:text-gray-300'>{projectCase.description}</p>
              <p className='mt-5 leading-7 text-gray-700 dark:text-gray-300'>
                <strong className='text-gray-950 dark:text-gray-50'>Atuação: </strong>
                {projectCase.role}
              </p>

              <p className='mt-6 text-sm font-medium leading-6 text-gray-800 dark:text-gray-200'>
                {projectCase.stack.join(' / ')}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
