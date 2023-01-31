/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx}',
    './src/views/**/*.{js,ts,jsx,tsx}'
  ],
  theme: {
    extend: {},
    colors: {
      blue: '#5371ff',
      white: '#ffffff',
      black: '#0d1b2a',
      pink: '#e286b5',
      yellow: '#ffbe58'
    }
  },
  plugins: []
}
