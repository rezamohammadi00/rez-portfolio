/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily:{
      "alibaba":"Alibaba",
    },
    fontWeight: {
      light: 300,
      regular: 400,
      bold: 700,
    },
    extend: {
      colors: {
        AppBgColor:"#0c0c1d",
        AppTextColor:"lightgray"
      }
    },
  },
  plugins: [],
}


