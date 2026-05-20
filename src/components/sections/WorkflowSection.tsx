import { workflowSteps } from '@/data/profile'
import { SectionHeading } from '@/components/ui/SectionHeading'

export function WorkflowSection() {
  return (
    <section id='workflow' className='container mx-auto py-24'>
      <SectionHeading
        eyebrow='Como trabalho'
        title='Metodologia que sigo.'
        description='Gosto de transformar demandas ambíguas em entregas bem definidas. Meu fluxo combina entendimento do problema, documentação objetiva, implementação incremental, revisão técnica e validação prática.'
      />

      <p className='mt-6 max-w-3xl text-base leading-7 text-gray-700 dark:text-gray-300 md:text-lg'>
        Uso Claude Code + Codex para: especificação (SDD), code review, refatoração e documentação. A
        responsabilidade sobre arquitetura e regras de negócio continua sendo minha.
      </p>

      <div className='mt-12 grid gap-5 md:grid-cols-3'>
        {workflowSteps.map((step, index) => (
          <article key={step.title} className='border-t pt-6 border-primary-700/60 dark:border-primary-300/70'>
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
