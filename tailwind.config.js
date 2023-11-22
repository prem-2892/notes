/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        azure: '#6ccff6',
        lavendar: '#ab81cd',
        blue: '#2b4570',
        magnolia: 'f7f0f5',
        magenta: 'ce84ad'
      },
    },
  },
  plugins: [],
}