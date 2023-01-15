/* eslint-disable max-len */
/* eslint-disable @next/next/no-img-element */

export interface ExperienceCardProps {
  experience: {
    title: string
    description: string
    image: string
    link: string
    alt: string
  }
}

export function ExperienceCard({ experience }: ExperienceCardProps) {
  return (
    <li
      key={experience.image}
      className='flex flex-col md:flex-row rounded-lg p-4 md:p-8 border border-primary-500 dark:border-primary-300 shadow-md dark:shadow-white/20 lg:w-4/5 md:self-center'
    >
      <article className='flex flex-col gap-4 md:gap-6 md:w-3/5'>
        <h3 className='font-bold text-xl text-gray-900 dark:text-gray-300'>{experience.title}</h3>
        <p className='text-gray-700 dark:text-gray-400'>{experience.description}</p>
      </article>
      <img
        alt={experience.alt}
        src={experience.image}
        className='rounded-lg hidden md:flex w-40 h-40 md:ml-auto self-center'
      />
    </li>
  )
}
