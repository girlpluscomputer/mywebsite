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
    },
    fontSize: {
      xs: '16px',
      sm: '24px',
      base: '40px',
      l: '56px',
      xl: '96px'
    },
    screens: {
      sm: '640px',
      // => @media (min-width: 640px) { ... }
      md: '768px',
      // => @media (min-width: 768px) { ... }
      lg: '1024px',
      // => @media (min-width: 1024px) { ... }
      xl: '1280px',
      // => @media (min-width: 1280px) { ... }
      '2xl': '1536px'
      // => @media (min-width: 1536px) { ... }
    },
    padding: {
      5: '5px',
      8: '8px',
      10: '10px',
      12: '12px',
      20: '20px',
      40: '40px',
      80: '80px'
    }
  },
  plugins: []
}
