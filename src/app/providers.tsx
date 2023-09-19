'use client'

import { AppProgressBar as ProgressBar } from 'next-nprogress-bar'
import { Suspense } from 'react'

import ThemeProvider from '@/components/ThemeProvider'

function Fallback() {
  return <></>
}

export default function Providers({ children }: { children: React.ReactNode }) {
  return (
    <ThemeProvider>
      <Suspense fallback={<Fallback />}>
        <ProgressBar height="3px" color="#38bdf8" options={{ showSpinner: false }} shallowRouting />
      </Suspense>
      {children}
    </ThemeProvider>
  )
}
