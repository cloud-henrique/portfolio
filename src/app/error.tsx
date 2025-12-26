'use client'

export default function Error({ reset }: { error: Error & { digest?: string }; reset: () => void }) {
  return (
    <div className='flex flex-col items-center justify-center min-h-screen bg-gray-50 dark:bg-gray-900 px-6'>
      <h2 className='text-2xl font-bold text-gray-900 dark:text-gray-300 mb-4'>Algo deu errado!</h2>
      <button onClick={() => reset()} className='btn-primary'>
        Tentar novamente
      </button>
    </div>
  )
}
