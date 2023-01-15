import Image from 'next/image'
import { ExternalLink, Link } from 'react-feather'

interface ProjectCardProps {
  project: {
    image: string
    alt: string
    title: string
    href: string
    description: string
  }
}

export function ProjectCard({ project }: ProjectCardProps) {
  return (
    <Link key={project.href} href={project.href} target='_blank'>
      <li className='w-80 cursor-pointer hover:animate-pulse'>
        <Image
          width={312}
          height={176}
          alt={project.alt}
          src={project.image}
          title={project.alt}
          className='rounded-lg'
        />
        <span className='flex  w-full justify-between mt-2 md:mt-4 mb-3 md:mb-2'>
          <h3 className='font-bold text-xl text-gray-700 dark:text-primary-50'>{project.title}</h3>
          <ExternalLink className='w-6 h-6 text-gray-700 dark:text-primary-50' />
        </span>
        <p className='text-sm md:text-base text-gray-700 dark:text-gray-400'>{project.description}</p>
      </li>
    </Link>
  )
}
