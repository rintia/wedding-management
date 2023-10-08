/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors:{
      'dark' : '#630A10',
      'light' : '#FCF0C8'

    },
    fontFamily:{
      cursive: "'Dancing Script', cursive"
    },
    extend: {},
  },
  plugins: [require("daisyui")],
}

