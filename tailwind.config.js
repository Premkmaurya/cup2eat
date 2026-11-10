/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        forest: {
          DEFAULT: '#123D32',
          light: '#1B5445',
          dark: '#0E2E26',
        },
        deep: {
          DEFAULT: '#0B2822',
          darker: '#061713',
        },
        cream: {
          DEFAULT: '#F7F3E8',
          soft: '#FCFAF5',
          muted: '#EFE8D6',
          border: '#E2D9C2',
        },
        gold: {
          DEFAULT: '#D6A84F',
          light: '#E6C278',
          dark: '#B58732',
        },
        terracotta: {
          DEFAULT: '#C76D4C',
          light: '#D98464',
          dark: '#A65536',
        },
        charcoal: {
          DEFAULT: '#1F2420',
          muted: '#4A544C',
          light: '#6E7870',
        },
      },
      fontFamily: {
        serif: ['Fraunces', 'Newsreader', 'Georgia', 'serif'],
        display: ['Fraunces', 'serif'],
        heading: ['Manrope', 'sans-serif'],
        body: ['DM Sans', 'sans-serif'],
      },
      boxShadow: {
        'warm-sm': '0 2px 8px -2px rgba(18, 61, 50, 0.05), 0 1px 4px -1px rgba(18, 61, 50, 0.03)',
        'warm-md': '0 10px 30px -4px rgba(18, 61, 50, 0.08), 0 4px 12px -2px rgba(18, 61, 50, 0.04)',
        'warm-lg': '0 20px 48px -8px rgba(18, 61, 50, 0.12), 0 8px 20px -4px rgba(18, 61, 50, 0.05)',
        'deep-lg': '0 24px 50px -12px rgba(0, 0, 0, 0.4)',
      },
      transitionTimingFunction: {
        'luxury': 'cubic-bezier(0.16, 1, 0.3, 1)',
      },
    },
  },
  plugins: [],
}
