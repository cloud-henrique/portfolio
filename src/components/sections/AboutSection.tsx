import Image from 'next/image'
import { SectionHeading } from '@/components/ui/SectionHeading'

export function AboutSection() {
  return (
    <section id='about' className='container mx-auto grid gap-12 py-24 md:grid-cols-[0.8fr_1.2fr] md:items-center'>
      <div className='flex justify-center md:justify-start'>
        <Image
          alt='Retrato de Cláudio Henrique'
          src='/static/img/claudio-henrique.png'
          width={320}
          height={320}
          className='h-48 w-48 rounded-lg object-cover md:h-72 md:w-72'
          priority
        />
      </div>

      <div>
        <SectionHeading eyebrow='Sobre' title='Experiência real em sistemas web e produto.' />
        <div className='mt-8 space-y-5 text-base leading-8 text-gray-700 dark:text-gray-300 md:text-lg'>
          <p>
            Sou desenvolvedor fullstack com +4 anos de experiência em desenvolvimento web, atuando de ponta a ponta em
            sistemas reais: frontend, backend, banco de dados, infraestrutura, integrações e sustentação em produção.
          </p>
          <p>
            Atualmente trabalho em uma healthtech, contribuindo para a evolução técnica de uma plataforma de cuidados
            para idosos. No dia a dia, trabalho principalmente com Angular, TypeScript, Laravel, PHP, MySQL, Docker,
            VPS/Linux e integrações com APIs externas.
          </p>
          <p>
            Uso Claude Code e Codex no dia a dia: para especificação técnica com SDD, code review, planejamento e
            refatoração. Priorizando clareza, manutenibilidade, e evitando retrabalho.
          </p>
        </div>
      </div>
    </section>
  )
}
