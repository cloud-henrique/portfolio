import { stackGroups } from '@/data/profile'
import { SectionHeading } from '@/components/ui/SectionHeading'

export function StackSection() {
  return (
    <section
      id='stack'
      className='border-y border-primary-700/10 bg-white/55 py-24 dark:border-primary-300/10 dark:bg-white/[0.03]'
    >
      <div className='container mx-auto'>
        <SectionHeading
          eyebrow='Stack'
          title='O que uso no dia a dia.'
          description='Front, back, banco, infra e automação.'
        />

        <div className='mt-12 grid gap-x-8 gap-y-10 md:grid-cols-2 lg:grid-cols-3'>
          {stackGroups.map(group => (
            <article key={group.title} className='border-l border-primary-700/30 pl-5 dark:border-primary-300/30'>
              <h3 className='text-lg font-bold text-gray-950 dark:text-gray-50'>{group.title}</h3>
              <p className='mt-4 leading-7 text-gray-700 dark:text-gray-300'>{group.items.join(' / ')}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
