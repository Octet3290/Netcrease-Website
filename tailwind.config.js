/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./*.html",
    "./**/*.html",      
    "./js/**/*.js"
  ],
  theme: {
    extend: {
      colors: {
        eyebrow: "#1C4987",
        heading: "#13315C",
        paragraph: "#113969",
        button: "#112D55",
      },
    },
  },
  plugins: [],
}
