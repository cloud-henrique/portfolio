import Link from 'next/link'
import { GitHub, Linkedin, Mail } from 'react-feather'
import { profile } from '@/data/profile'
import { SectionHeading } from '@/components/ui/SectionHeading'

export function ContactSection() {
  const contacts = [
    {
      icon: Linkedin,
      title: 'LinkedIn',
      href: profile.linkedin,
      label: 'linkedin.com/in/cloud-henrique',
    },
    {
      icon: GitHub,
      title: 'GitHub',
      href: profile.github,
      label: 'github.com/cloud-henrique',
    },
    {
      icon: Mail,
      title: 'Email',
      href: `mailto:${profile.email}`,
      label: profile.email,
    },
  ]

  return (
    <section id='contact' className='container mx-auto py-24'>
      <SectionHeading
        eyebrow='Contato'
        title='Vamos conversar?'
        description='Estou aberto a oportunidades, projetos e conversas técnicas sobre desenvolvimento web, produto, automação e fluxos com IA.'
      />

      <div className='mt-10 grid gap-4 md:grid-cols-3'>
        {contacts.map(contact => (
          <Link
            key={contact.href}
            href={contact.href}
            target={contact.href.startsWith('mailto:') ? undefined : '_blank'}
            rel={contact.href.startsWith('mailto:') ? undefined : 'noreferrer'}
            className='border border-gray-200 bg-white p-5 transition-colors hover:border-primary-700 dark:border-white/10 dark:bg-white/[0.04] dark:hover:border-primary-300'
          >
            <contact.icon className='h-6 w-6 text-primary-700 dark:text-primary-300' />
            <h3 className='mt-4 font-bold text-gray-950 dark:text-gray-50'>{contact.title}</h3>
            <p className='mt-2 break-words text-sm text-gray-700 dark:text-gray-300'>{contact.label}</p>
          </Link>
        ))}
      </div>
    </section>
  )
}
