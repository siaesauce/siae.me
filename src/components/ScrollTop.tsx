'use client'

import { useEffect, useState } from 'react'

export default function ScrollTop() {
  const [show, setShow] = useState(false)
  useEffect(() => {
    const handleWindowScroll = () => {
      if (window.scrollY > 100) setShow(true)
      else setShow(false)
    }

    window.addEventListener('scroll', handleWindowScroll)
    return () => window.removeEventListener('scroll', handleWindowScroll)
  }, [])

  const handleScrollTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <button
      aria-label="Scroll to top"
      onClick={handleScrollTop}
      className={`fixed flex items-center justify-center bottom-5 right-5 z-50 rounded-lg shadow text-black bg-white hover:dark:bg-gray-600 hover:bg-gray-200 dark:bg-gray-700 dark:text-white sm:w-14 sm:h-14 transition duration-300 ${
        show ? '-translate-y-0' : 'translate-y-20'
      }`}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        className="h-10 w-10 fill-current sm:h-16 sm:w-16"
      >
        <path d="M17 13.41l-4.29-4.24a1 1 0 00-1.42 0l-4.24 4.24a1 1 0 000 1.42 1 1 0 001.41 0L12 11.29l3.54 3.54a1 1 0 00.7.29 1 1 0 00.71-.29 1 1 0 00.05-1.42z"></path>
      </svg>
    </button>
  )
}
