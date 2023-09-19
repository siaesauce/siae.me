import type { Config } from 'tailwindcss'

const config: Config = {
  content: ['./src/**/*.{ts,tsx}', './content/posts/**/*.{md,mdx}'],
  theme: {
    fontFamily: {
      mono: `Roboto Mono,Monaco,monospace`,
    },
  },
  plugins: [],
  darkMode: 'class',
}
export default config
