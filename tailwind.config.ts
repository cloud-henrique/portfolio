import type { Config } from 'tailwindcss'

const config: Config = {
  darkMode: 'class',
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        graphite: '#15171C',
        offwhite: '#F4E8DE',
        primary: {
          50: '#fff4ed',
          100: '#ffe5d4',
          200: '#ffc7a8',
          300: '#ff9d70',
          400: '#f06f3f',
          500: '#c65a2e',
          600: '#a94726',
          700: '#87361f',
          800: '#6e2d1d',
          900: '#4b2118',
        },
      },
      fontSize: { '3xl': '2rem' },
    },
  },
  plugins: [],
}

export default config
