/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      screens: {
        md2: '1050px',
      },
    },
  },
  plugins: [require('flowbite/plugin')],
};
