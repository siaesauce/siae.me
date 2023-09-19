'use client'

import { useEffect, useState } from 'react'

import Image from '@/components/Image'
import Link from '@/components/Link'

import ToggleTheme from '../ToggleTheme'

export default function Header() {
  const menu: Array<string> = ['posts', 'talks', 'friends', 'about']
  const [openMenu, setOpenMenu] = useState(false)
  const [hidden, setHidden] = useState(false)
  const [lastScroll, setLastScroll] = useState(0)
  const [scrollY, setScrollY] = useState(0)
  const handleScroll = () => setScrollY(window.scrollY || window.pageYOffset)

  useEffect(() => {
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])
  const hideOffset = 100

  if (Math.abs(scrollY - lastScroll) > hideOffset) {
    setHidden(scrollY >= lastScroll)
    setLastScroll(scrollY)
  }

  return (
    <header
      className={`fixed w-full z-10 bg-gray-100 bg-opacity-50 backdrop-blur backdrop-filter shadow p-4 sm:p-3 dark:bg-gray-800 dark:bg-opacity-50 transition-transform duration-300 ${
        hidden ? '-translate-y-full' : ''
      }`}
    >
      <div className="flex flex-col max-w-3xl m-auto sm:flex-row sm:items-center">
        <div className="flex flex-grow items-center justify-between">
          <div className="flex items-center">
            <Image
              className="hidden sm:block"
              src="/favicon.svg"
              alt="logo"
              width="48"
              height="48"
            />
            <Link
              onClick={() => (openMenu ? setOpenMenu(!openMenu) : '')}
              className="text-xl font-semibold ml-0 text-gray-700 dark:text-gray-200 sm:ml-3"
              href="/"
            >
              @SIAE.SAUCE
            </Link>
          </div>
          <div className="flex items-center justify-between">
            <ToggleTheme />
            <button
              aria-label="Toggle Navigation Menu"
              onClick={() => setOpenMenu(!openMenu)}
              className="ml-3 sm:hidden"
            >
              {!openMenu ? (
                <svg
                  className={` dark:text-gray-200`}
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                >
                  <g fill="none">
                    <path d="M24 0v24H0V0h24ZM12.593 23.258l-.011.002l-.071.035l-.02.004l-.014-.004l-.071-.035c-.01-.004-.019-.001-.024.005l-.004.01l-.017.428l.005.02l.01.013l.104.074l.015.004l.012-.004l.104-.074l.012-.016l.004-.017l-.017-.427c-.002-.01-.009-.017-.017-.018Zm.265-.113l-.013.002l-.185.093l-.01.01l-.003.011l.018.43l.005.012l.008.007l.201.093c.012.004.023 0 .029-.008l.004-.014l-.034-.614c-.003-.012-.01-.02-.02-.022Zm-.715.002a.023.023 0 0 0-.027.006l-.006.014l-.034.614c0 .012.007.02.017.024l.015-.002l.201-.093l.01-.008l.004-.011l.017-.43l-.003-.012l-.01-.01l-.184-.092Z"></path>
                    <path
                      fill="currentColor"
                      d="M20 17.5a1.5 1.5 0 0 1 .144 2.993L20 20.5H4a1.5 1.5 0 0 1-.144-2.993L4 17.5h16Zm0-7a1.5 1.5 0 0 1 0 3H4a1.5 1.5 0 0 1 0-3h16Zm0-7a1.5 1.5 0 0 1 0 3H4a1.5 1.5 0 1 1 0-3h16Z"
                    ></path>
                  </g>
                </svg>
              ) : (
                <svg
                  className={` dark:text-gray-200`}
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 48 48"
                >
                  <path
                    fill="none"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="4"
                    d="m8 8l32 32M8 40L40 8"
                  ></path>
                </svg>
              )}
            </button>
          </div>
        </div>
        <nav className={`${openMenu ? '' : 'hidden'} pt-2 sm:flex sm:items-center sm:p-0`}>
          <div className="sm:flex flex-row items-center justify-center">
            {menu.map((item) => (
              <Link
                onClick={() => (openMenu ? setOpenMenu(!openMenu) : '')}
                className="text-lg font-semibold text-gray-700 capitalize cursor-pointer block rounded p-2 hover:bg-gray-200 focus:bg-gray-200 focus:bg-opacity-50 focus:outline-none transition-colors duration-300 dark:text-gray-200 dark:hover:bg-gray-700 dark:focus:bg-gray-700 sm:ml-2 sm:first:ml-0"
                href={`/${item}`}
                key={item}
              >
                {item}
              </Link>
            ))}
          </div>
        </nav>
      </div>
    </header>
  )
}
