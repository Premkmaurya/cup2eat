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
          soft: '#FCFAF4',
          muted: '#EFE9D8',
          border: '#E3DCBF',
        },
        gold: {
          DEFAULT: '#D6A84F',
          light: '#E5C075',
          dark: '#B88B35',
        },
        terracotta: {
          DEFAULT: '#C76D4C',
          light: '#D98464',
          dark: '#A65536',
        },
        charcoal: {
          DEFAULT: '#1F2420',
          muted: '#4B554D',
          light: '#6E7870',
        },
      },
      fontFamily: {
        heading: ['Manrope', 'sans-serif'],
        body: ['DM Sans', 'sans-serif'],
      },
      boxShadow: {
        'warm-sm': '0 2px 8px -2px rgba(18, 61, 50, 0.06), 0 1px 4px -1px rgba(18, 61, 50, 0.04)',
        'warm-md': '0 8px 24px -4px rgba(18, 61, 50, 0.08), 0 4px 12px -2px rgba(18, 61, 50, 0.04)',
        'warm-lg': '0 16px 36px -6px rgba(18, 61, 50, 0.12), 0 8px 16px -4px rgba(18, 61, 50, 0.06)',
        'deep-lg': '0 20px 40px -10px rgba(0, 0, 0, 0.35)',
      },
      transitionTimingFunction: {
        'luxury': 'cubic-bezier(0.16, 1, 0.3, 1)',
      },
    },
  },
  plugins: [],
}
