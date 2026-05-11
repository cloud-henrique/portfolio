import { workflowSteps } from '@/data/profile'
import { SectionHeading } from '@/components/ui/SectionHeading'

export function WorkflowSection() {
  return (
    <section id='workflow' className='container mx-auto py-24'>
      <SectionHeading
        eyebrow='Como trabalho'
        title='Da demanda ambígua à entrega validada.'
        description='Gosto de transformar demandas ambíguas em entregas bem definidas. Meu fluxo combina entendimento do problema, documentação objetiva, implementação incremental, revisão técnica e validação prática.'
      />

      <p className='mt-6 max-w-3xl text-base leading-7 text-gray-700 dark:text-gray-300 md:text-lg'>
        Uso IA como apoio para acelerar planejamento, revisão, refatoração e documentação, mantendo a responsabilidade
        técnica sobre decisões de arquitetura, regras de negócio e manutenção.
      </p>

      <div className='mt-12 grid gap-5 md:grid-cols-3'>
        {workflowSteps.map((step, index) => (
          <article key={step.title} className='border-t border-gray-200 pt-6 dark:border-white/10'>
            <span className='text-sm font-semibold text-primary-800 dark:text-primary-200'>
              {String(index + 1).padStart(2, '0')}
            </span>
            <h3 className='mt-4 text-xl font-bold text-gray-950 dark:text-gray-50'>{step.title}</h3>
            <p className='mt-4 leading-7 text-gray-700 dark:text-gray-300'>{step.description}</p>
          </article>
        ))}
      </div>
    </section>
  )
}
