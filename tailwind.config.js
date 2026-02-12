//** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./public/**/*.{html,js}",
    "./src/pages/**/*.{html,js}",
    "./src/partials/**/*.{html,js}",
  ],
  theme: {
    extend: {},
  },
  plugins: [
    require('daisyui'),
  ],
  daisyui: {
    themes: ["autumn", "nord", "business"],
  },
}
