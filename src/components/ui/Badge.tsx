interface BadgeProps {
  children: React.ReactNode
}

export function Badge({ children }: BadgeProps) {
  return (
    <span className='rounded-sm border border-primary-500/20 bg-primary-500/10 px-2.5 py-1 text-xs font-semibold uppercase tracking-[0.08em] text-primary-800 dark:border-primary-300/25 dark:bg-primary-300/10 dark:text-primary-200'>
      {children}
    </span>
  )
}
