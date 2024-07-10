/** @type {import('tailwindcss').Config} */
module.exports = {
  content:  ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors:{
        primary:{
          100:"rgba(132, 108, 249,0.1)",
          200:"rgba(132, 108, 249,0.2)",
          300:"rgba(132, 108, 249,0.3)",
          400:"rgba(132, 108, 249,0.4)",
          500:"rgba(132, 108, 249,0.5)",
          600:"rgba(132, 108, 249,0.6)",
          700:"rgba(132, 108, 249,0.7)",
          800:"rgba(132, 108, 249,0.8)",
          900:"rgba(132, 108, 249,0.9)",
          950:"rgba(132, 108, 249,1)"
        },
        secondary:"#653BF1",
        primary_light:"#BBB3FD",
        ground:"#EEF1F9"
      }
    },
  },
  plugins: [],
}

