interface SectionHeadingProps {
  eyebrow?: string
  title: string
  description?: string
}

export function SectionHeading({ eyebrow, title, description }: SectionHeadingProps) {
  return (
    <div className='max-w-3xl'>
      {eyebrow && (
        <p className='mb-3 text-sm font-semibold uppercase tracking-[0.18em] text-primary-700 dark:text-primary-300'>
          {eyebrow}
        </p>
      )}
      <h2 className='text-3xl font-bold text-gray-950 dark:text-gray-50 md:text-5xl'>{title}</h2>
      {description && (
        <p className='mt-5 text-base leading-7 text-gray-700 dark:text-gray-300 md:text-lg'>{description}</p>
      )}
    </div>
  )
}
