export function Footer() {
  return (
    <footer className='h-14 w-screen bg-primary-900 flex items-center justify-center text-center'>
      <p className='text-gray-50 text-xs md:text-base'>
        &copy; {new Date().getFullYear()} - Desenvolvido com ❤️ por Cláudio Henrique
      </p>
    </footer>
  )
}
