/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}"
  ],
  theme: {
    extend: {
      fontFamily: {
        serif: "Permanent Marker"
      },
      container: {
        center: true,
      },
      colors: {
        transparent: 'transparent',
        current: 'currentColor',
        ourpink : {
          'light' : '#9D066A',
          'dark' : '#FF94DA',
        },
        ourblue : {
          'light' : '#005382',
          'dark' : '#6FD9DE'
        },
        background : {
          'dark' : '#121212',
          'dark-secondary' : '#DEDEDE',
          'light' : '#DDDDDD',
        },
      },
    },
  },
  plugins: [],
};
