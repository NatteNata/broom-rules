import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/widgets/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  plugins: [],
  theme: {
    extend: {
      colors: {
        background: 'var(--color-background)',
        primary: 'var(--color-primary)',
        textbase: 'var(--color-base)',
      },
      fontFamily: {
        base: 'var(--font-base)',
      },
    },
  },
}

export default config
