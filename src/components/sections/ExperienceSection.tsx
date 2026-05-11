import { experiences } from '@/data/profile'
import { SectionHeading } from '@/components/ui/SectionHeading'

export function ExperienceSection() {
  return (
    <section
      id='experience'
      className='border-y border-gray-200 bg-white/70 py-24 dark:border-white/10 dark:bg-gray-950/40'
    >
      <div className='container mx-auto'>
        <SectionHeading
          eyebrow='Experiência'
          title='Trajetória em produto, operação e entrega.'
          description='Experiências resumidas com foco no que sustenta a narrativa atual do portfólio.'
        />

        <div className='mt-12 grid gap-5'>
          {experiences.map(experience => (
            <article
              key={`${experience.company}-${experience.period}`}
              className='rounded-lg border border-gray-200 bg-gray-50 p-6 dark:border-white/10 dark:bg-gray-900'
            >
              <div className='flex flex-col gap-2 md:flex-row md:items-start md:justify-between'>
                <div>
                  <h3 className='text-xl font-bold text-gray-950 dark:text-gray-50'>
                    {experience.title} — {experience.company}
                  </h3>
                  <p className='mt-1 text-sm font-medium text-primary-800 dark:text-primary-200'>{experience.period}</p>
                </div>
              </div>

              <p className='mt-5 leading-7 text-gray-700 dark:text-gray-300'>{experience.description}</p>

              {experience.highlights && (
                <ul className='mt-5 grid gap-2 text-gray-700 dark:text-gray-300 md:grid-cols-2'>
                  {experience.highlights.map(highlight => (
                    <li key={highlight} className='flex gap-3'>
                      <span className='mt-3 h-1.5 w-1.5 shrink-0 rounded-full bg-primary-700 dark:bg-primary-300' />
                      <span>{highlight}</span>
                    </li>
                  ))}
                </ul>
              )}

              {experience.stack && (
                <p className='mt-5 font-medium text-gray-800 dark:text-gray-200'>Stack: {experience.stack}</p>
              )}
              {experience.highlight && (
                <p className='mt-5 font-medium text-gray-800 dark:text-gray-200'>Destaque: {experience.highlight}</p>
              )}
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
