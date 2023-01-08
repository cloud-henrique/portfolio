import { useState, useEffect } from 'react'

import { Head } from 'components/Head'

export default function Home() {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) return null

  return (
    <>
      <Head title='Pulsatrix Apps' />

      <div className='transition-all duration-300 flex-col'>
        <h1>Toda boa ideia merece um bom código</h1>
        <p>e acredito que eu possa te ajudar nisso.</p>
      </div>
    </>
  )
}
