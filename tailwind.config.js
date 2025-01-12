/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme');

export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        spartan: ['"League Spartan"', ...defaultTheme.fontFamily.sans],
        nunito: ['"Nunito Sans"', ...defaultTheme.fontFamily.sans],
        pathway: ['"Pathway Extreme"', ...defaultTheme.fontFamily.sans],
      },
    },
  },
  plugins: [],
};
