import type { MDXComponents } from 'mdx/types'
import { useMDXComponent } from 'next-contentlayer/hooks'

import Image from './Image'
import Link from './Link'
import Pre from './Pre'

const components: MDXComponents = {
  Image,
  a: Link,
  pre: Pre,
}

export function MDXComponent({ code }: { code: string }) {
  const Component = useMDXComponent(code)

  return <Component components={components} />
}
