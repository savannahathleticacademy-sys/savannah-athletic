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
        pitch: {
          black: '#080A0F',
          dark: '#0D1117',
          card: '#111827',
          border: '#1F2937',
        },
        gold: {
          DEFAULT: '#D4AF37',
          light: '#F0D060',
          dark: '#A88B1A',
        },
        turf: {
          DEFAULT: '#2D6A4F',
          light: '#40916C',
        },
      },
      backgroundImage: {
        'hero-gradient': 'radial-gradient(ellipse at top left, rgba(212,175,55,0.12) 0%, transparent 60%), radial-gradient(ellipse at bottom right, rgba(45,106,79,0.10) 0%, transparent 60%)',
        'card-gradient': 'linear-gradient(135deg, rgba(212,175,55,0.06) 0%, transparent 100%)',
      },
      animation: {
        'fade-up': 'fadeUp 0.7s ease forwards',
        'shimmer': 'shimmer 2.5s infinite',
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
