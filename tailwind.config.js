/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/app/**/*.{js,jsx}',
    './src/components/**/*.{js,jsx}',
  ],
  theme: {
    extend: {
      /**
       * Brand Theme Colors - Silver Wood Heights
       * Premium, calm, architectural, luxury residential feel
       */
      colors: {
        // Primary background
        bone: {
          DEFAULT: '#EBE3D2',
          50: '#FAF8F4',
          100: '#F5F1E8',
          200: '#EBE3D2',
          300: '#DDD1B8',
          400: '#CFBF9E',
        },
        // Secondary background / cards
        dun: {
          DEFAULT: '#CCBFA3',
          50: '#F7F5F0',
          100: '#EBE6DA',
          200: '#DDD4C0',
          300: '#CCBFA3',
          400: '#B8A785',
        },
        // Accents, highlights, icons
        sage: {
          DEFAULT: '#A4AC86',
          50: '#F4F5F0',
          100: '#E6E9DC',
          200: '#D0D6BC',
          300: '#B8C19A',
          400: '#A4AC86',
          500: '#8A9470',
        },
        // Buttons, links, active states
        reseda: {
          DEFAULT: '#737A5D',
          50: '#F2F3EF',
          100: '#E2E4DB',
          200: '#C5C9B7',
          300: '#A5AB8F',
          400: '#8A9173',
          500: '#737A5D',
          600: '#5C6249',
          700: '#454936',
        },
        // Primary text, headers
        ebony: {
          DEFAULT: '#414833',
          50: '#F4F5F3',
          100: '#E5E7E1',
          200: '#C8CCC0',
          300: '#A3A994',
          400: '#7A8268',
          500: '#5A614A',
          600: '#414833',
          700: '#2F3425',
          800: '#1E2118',
        },
      },
      fontFamily: {
        sans: ['var(--font-sans)', 'system-ui', 'sans-serif'],
        display: ['var(--font-display)', 'Georgia', 'serif'],
      },
      spacing: {
        '18': '4.5rem',
        '88': '22rem',
        '128': '32rem',
      },
      maxWidth: {
        '8xl': '88rem',
      },
    },
  },
  plugins: [],
};