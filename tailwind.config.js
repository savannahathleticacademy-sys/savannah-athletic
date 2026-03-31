/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        display: ['Bebas Neue', 'cursive'],
        heading: ['Barlow Condensed', 'sans-serif'],
        body: ['DM Sans', 'sans-serif'],
      },
      colors: {
        skill: {
          black: '#0a0a0a',
          dark: '#111111',
          card: '#1a1a1a',
          border: '#2a2a2a',
        },
        primary: {
          DEFAULT: '#7dd3fc', // azul hielo (MAIN COLOR)
          light: '#bae6fd',
          dark: '#38bdf8',
        },
        accent: {
          green: '#22c55e',
          lime: '#a3e635',
        },
        text: {
          main: '#f1f5f9',
          muted: '#9ca3af',
        },
      },
      backgroundImage: {
        'grain-texture':
          "url('https://www.transparenttextures.com/patterns/asfalt-light.png')",
        'hero-gradient':
          'radial-gradient(circle at top, rgba(125,211,252,0.15), transparent 60%)',
      },
      animation: {
        'fade-up': 'fadeUp 0.7s ease forwards',
        shimmer: 'shimmer 2.5s infinite',
        'pulse-slow': 'pulse 3s infinite',
      },
      keyframes: {
        fadeUp: {
          from: { opacity: '0', transform: 'translateY(30px)' },
          to: { opacity: '1', transform: 'translateY(0)' },
        },
        shimmer: {
          '0%': { backgroundPosition: '-200% 0' },
          '100%': { backgroundPosition: '200% 0' },
        },
      },
    },
  },
  plugins: [],
}
