import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { ThemeProvider } from './theme-provider'
import { ThemeToggler } from './ThemeToggler'
import SearchInput from './SearchInput'

function Header() {
  return (
    <header className='fixed w-full z-20 top-0 flex items-center justify-between p-5 bg-gradient-to-t from-gray-200/0 via-gray-900/25 to-gray-900'>
      <Link href='/' className='mr-10'>
        <Image
        src='https://links.papareact.com/a943ae'
        alt='Disney logo'
        width={120}
        height={100}
        className='cursor-pointer invert-0 dark:invert'
        />
      </Link>

      <div className="">
        {/* {genreDropdown} */}
        {/* {SearchInput} */}
        {/* {themeToggler} */}
        <SearchInput/>
        <ThemeToggler/>
      </div>
    </header>
  )
}

export default Header
