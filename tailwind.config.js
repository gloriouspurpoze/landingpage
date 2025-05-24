/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
    keyframes: {
      scroll: {
        '0%': { transform: 'translateX(0)' },
        '100%': { transform: 'translateX(-50%)' },
      },
    },
    animation: {
      scroll: 'scroll 20s linear infinite',
    },
    colors: {
        background: '#0D1310',
        accent: '#3EB489',
        primary: '#EEE7DC',
      },
      fontFamily: {
        sans: ["Inter", "sans-serif"], // or whatever font you picked
      }
  },
  },
  plugins: [],
}