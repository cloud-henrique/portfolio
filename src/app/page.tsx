import { AboutSection } from '@/components/sections/AboutSection'
import { CasesSection } from '@/components/sections/CasesSection'
import { ContactSection } from '@/components/sections/ContactSection'
import { ExperienceSection } from '@/components/sections/ExperienceSection'
import { HeroSection } from '@/components/sections/HeroSection'
import { StackSection } from '@/components/sections/StackSection'
import { WorkflowSection } from '@/components/sections/WorkflowSection'

export default function Home() {
  return (
    <div className='bg-offwhite text-gray-950 transition-colors duration-300 dark:bg-graphite dark:text-gray-50'>
      <HeroSection />
      <AboutSection />
      <StackSection />
      <CasesSection />
      <ExperienceSection />
      <WorkflowSection />
      <ContactSection />
    </div>
  )
}
