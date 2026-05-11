export function Footer() {
  return (
    <footer className='flex h-14 w-screen items-center justify-center bg-graphite text-center'>
      <p className='text-xs text-gray-50 md:text-base'>
        &copy; {new Date().getFullYear()} - Desenvolvido por Cláudio Henrique
      </p>
    </footer>
  )
}
