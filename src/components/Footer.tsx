export function Footer() {
  return (
    <footer className='flex h-14 w-full items-center justify-center bg-graphite px-5 text-center'>
      <p className='text-xs text-gray-50 md:text-base'>
        &copy; {new Date().getFullYear()} - Desenvolvido por Cláudio Henrique
      </p>
    </footer>
  )
}
