/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'max-orange': '#E85D04',
        'max-orange-light': '#F48C06',
        'max-orange-dark': '#DC2F02',
        'max-dark': '#0D0D0D',
        'max-dark-light': '#1A1A1A',
        'max-offwhite': '#F8F6F0',
        'max-gray': '#8C8C8C',
      },
      fontFamily: {
        'display': ['"Bebas Neue"', 'sans-serif'],
        'body': ['Inter', 'sans-serif'],
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'glow': 'glow 3s ease-in-out infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        glow: {
          '0%, 100%': { opacity: 0.3 },
          '50%': { opacity: 0.8 },
        },
      },
    },
  },
  plugins: [],
}
