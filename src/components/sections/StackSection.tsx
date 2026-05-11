import { stackGroups } from '@/data/profile'
import { Badge } from '@/components/ui/Badge'
import { SectionHeading } from '@/components/ui/SectionHeading'

export function StackSection() {
  return (
    <section id='stack' className='border-y border-gray-200 bg-white/70 py-24 dark:border-white/10 dark:bg-gray-950/40'>
      <div className='container mx-auto'>
        <SectionHeading
          eyebrow='Stack'
          title='Ferramentas para construir, operar e evoluir.'
          description='A stack principal combina frontend, backend, dados, infraestrutura e workflows de desenvolvimento.'
        />

        <div className='mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-3'>
          {stackGroups.map(group => (
            <article
              key={group.title}
              className='rounded-lg border border-gray-200 bg-gray-50 p-6 dark:border-white/10 dark:bg-gray-900'
            >
              <h3 className='text-lg font-bold text-gray-950 dark:text-gray-50'>{group.title}</h3>
              <div className='mt-5 flex flex-wrap gap-2'>
                {group.items.map(item => (
                  <Badge key={item}>{item}</Badge>
                ))}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
