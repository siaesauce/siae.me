import Link, { LinkProps } from 'next/link'
import { AnchorHTMLAttributes } from 'react'

export default function CustomLink({
  href,
  ...rest
}: LinkProps & AnchorHTMLAttributes<HTMLAnchorElement>) {
  const isInternalLink = href && href.startsWith('/')
  const isAnchorLink = href && href.startsWith('#')

  if (!href) {
    return <span {...rest} />
  }

  if (isInternalLink) {
    return <Link href={href as string} {...rest}></Link>
  }

  if (isAnchorLink) {
    return <a href={href} {...rest} />
  }

  return <a target="_blank" rel="noopener noreferrer nofollow" href={href} {...rest} />
}
