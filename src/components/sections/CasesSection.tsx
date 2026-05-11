import Link from 'next/link'
import { ExternalLink } from 'react-feather'
import { cases } from '@/data/profile'
import { Badge } from '@/components/ui/Badge'
import { SectionHeading } from '@/components/ui/SectionHeading'

export function CasesSection() {
  return (
    <section id='cases' className='container mx-auto py-24'>
      <SectionHeading
        eyebrow='Cases selecionados'
        title='Poucos cases, mais contexto.'
        description='Uma seleção focada em sistemas web reais, atuação profissional e direção técnica em desenvolvimento.'
      />

      <div className='mt-12 grid gap-6 lg:grid-cols-3'>
        {cases.map(projectCase => (
          <article
            key={projectCase.title}
            className='flex h-full flex-col rounded-lg border border-gray-200 bg-white p-6 shadow-sm dark:border-white/10 dark:bg-gray-900'
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

            <div className='mt-6 flex flex-wrap gap-2'>
              {projectCase.stack.map(item => (
                <Badge key={item}>{item}</Badge>
              ))}
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}
