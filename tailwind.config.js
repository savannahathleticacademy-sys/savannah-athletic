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
          black: '#0B1220',
          dark: '#111827',
          card: '#1F2937',
          border: '#334155',
        },
        blue: {
          DEFAULT: '#3B82F6',
          light: '#60A5FA',
          dark: '#1D4ED8',
        },
        green: {
          DEFAULT: '#22C55E',
          light: '#4ADE80',
          dark: '#16A34A',
        },
        text: {
          main: '#E5EEF8',
          muted: '#94A3B8',
        },
      },
      backgroundImage: {
        'hero-gradient':
          'radial-gradient(ellipse at top left, rgba(59,130,246,0.14) 0%, transparent 60%), radial-gradient(ellipse at bottom right, rgba(34,197,94,0.12) 0%, transparent 60%)',
        'card-gradient':
          'linear-gradient(135deg, rgba(59,130,246,0.08) 0%, rgba(34,197,94,0.05) 100%)',
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
