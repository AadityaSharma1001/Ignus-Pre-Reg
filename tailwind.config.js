/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        rye: ['Rye', 'cursive'],
        carnival: ['Bungee', 'cursive'],
        rosiana: ['Cinzel Decorative', 'serif'],
        caudex: ['Caudex', 'serif'],
        redrose: ['Red Rose', 'sans-serif'],
        raleway: ['Raleway', 'sans-serif'],
        relington: ['Relington', 'sans-serif'], 
        montserrat: ['Montserrat', 'sans-serif']
      },
      animation: {
        'twinkle': 'twinkle 3s ease-in-out infinite',
        'cloud-scroll': 'cloudScroll 40s linear infinite',
      },
      keyframes: {
        twinkle: {
          '0%, 100%': { opacity: '0.3', transform: 'scale(1)' },
          '50%': { opacity: '1', transform: 'scale(1.2)' },
        },
        cloudScroll: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-50%)' },
        },
      },
    },
  },
  plugins: [],
};
