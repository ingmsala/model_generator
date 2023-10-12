'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'

export default function Navbar () {
  const pathname = usePathname()

  return (
    <nav
      className='flex fixed top-0 justify-between items-center w-full py-4 px-10
     bg-white backdrop-filter backdrop-blur-sm bg-opacity-30 '>
      <Link href='/' className=' hover:text-gray-500 text-gray-400 select-none'>Yii2 Model Generator</Link>
      <ul className='flex gap-4'>
        <Link href='/' className='flex gap-2 hover:text-gray-500 text-gray-400'>
          <span className={`px-3 select-none ${pathname === '/' ? ' rounded-full bg-gray-200 text-gray-600' : ''}`}>Home</span>
        </Link>
        <Link href='/settings' className='flex gap-2 hover:text-gray-500 text-gray-400'>
          <span
            className={`px-3 select-none ${pathname === '/settings' ? ' rounded-full bg-gray-200 text-gray-600' : ''}`}>
              Settings
          </span>
        </Link>
      </ul>
    </nav>
  )
}
