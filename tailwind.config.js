/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        getlinkedai_bg: '#150E28',
        getlinkedai_light_purple: '#903AFF',
        getlinkedai_fuchsia: '#D434FE',
      },
      fontFamily: {
        cabin: 'Cabin Condensed sans-serif',
      }
    },
  },
  plugins: [],
}