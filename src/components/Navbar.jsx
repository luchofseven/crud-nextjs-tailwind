import Link from 'next/link'

export default function Navbar () {
  return (
    <header className='bg-gray-800 px-8 py-4 lg:px-28 lg:py-3'>
      <nav className='flex justify-between items-center'>
        <Link href='/'>
          <h2 className='font-bold text-xl text-green-500 transition ease-in-out lg:hover:scale-105 lg:hover:before:content-["/"] lg:hover:before:px-1 lg:hover:after:content-["/"] lg:hover:after:px-1'>
            Home
          </h2>
        </Link>
        <Link href='/new'>
          <h2 className='bg-green-500 lg:hover:bg-green-400 transition ease-in-out lg:hover:scale-105 px-5 py-2 text-gray-50 lg:hover:text-gray-800 font-bold rounded-full inline-flex'>
            Nueva tarea
          </h2>
        </Link>
      </nav>
    </header>
  )
}
