'use client'

import { useTheme } from 'next-themes'

import { envConfig } from '@/data/envConfig'
import Giscus from '@giscus/react'

const themeMapping = {
  light: 'light',
  dark: 'transparent_dark',
}

export default function GiscusComment() {
  const { resolvedTheme } = useTheme()
  const theme = themeMapping[resolvedTheme as keyof typeof themeMapping]

  return (
    <Giscus
      repo={envConfig.giscus.repo}
      repoId={envConfig.giscus.repositoryId}
      category={envConfig.giscus.category}
      categoryId={envConfig.giscus.categoryId}
      mapping="title"
      reactionsEnabled="0"
      emitMetadata="0"
      inputPosition="top"
      theme={theme}
      lang="en"
      loading="lazy"
    />
  )
}
