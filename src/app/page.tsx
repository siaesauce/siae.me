import { envConfig } from '@/data/envConfig'

export default function Home() {
  const links = [
    {
      title: 'GitHub',
      href: envConfig.github,
    },
    {
      title: 'Telegram',
      href: envConfig.telegram,
    },
    {
      title: 'Twitter',
      href: envConfig.twitter,
    },
    {
      title: 'E-mail',
      href: envConfig.email,
    },
  ]

  return (
    <div className="flex flex-grow flex-col max-w-4xl m-auto justify-center truncate">
      <h1
        id="element"
        className="text-3xl font-bold text-gray-800 dark:text-gray-200 sm:text-5xl mb-2"
      >
        Hi, I&apos;m SIAE.SAUCE :)
      </h1>
      <h2 className="text-lg font-medium text-gray-600 mb-2 dark:text-gray-400 sm:text-2xl sm:mb-3">
        Front-end developer
      </h2>

      <div className="flex items-center">
        <h3 className="text-lg font-medium text-gray-600 dark:text-gray-300 sm:text-2xl mr-2">
          Find me:{' '}
        </h3>
        <div>
          {links.map((link, index) => (
            <span key={link.title}>
              <a
                href={link.title === 'E-mail' ? `mailto:${link.href}` : link.href}
                target="_blank"
                rel="noopener noreferrer nofollow"
                className="text-base font-semibold text-blue-600 transition-colors duration-300 hover:text-blue-400 sm:text-xl"
              >
                {link.title}
              </a>
              {index !== links.length - 1 && (
                <span className="mx-1 text-gray-950 dark:text-gray-400 select-none">/</span>
              )}
            </span>
          ))}
        </div>
      </div>
    </div>
  )
}
