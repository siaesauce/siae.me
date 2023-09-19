import { ReactNode } from 'react'

import Link from '@/components/Link'

export default function Page({ children, title }: { children: ReactNode; title: string }) {
  return (
    <div className="flex grow flex-col w-full max-w-3xl mt-14 sm:mt-24">
      <div>
        <Link
          href="/posts"
          className="text-2xl sm:text-4xl text-gray-700 hover:text-gray-600 font-semibold transform-color duration-300 dark:text-gray-100 dark:hover:text-gray-100"
        >
          {title}
        </Link>
        <hr className="border-gray-300 dark:border-gray-600 mt-2 sm:mt-5" />
      </div>
      {children}
    </div>
  )
}
