/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'ltGray': '#cdd1c4',
        'mdGray': '#4d5061',
        'dkGray': '#30323d',
        'blue': '#5c80bc',
        'yellow': '#e8c547',
        'jsYellow': '#EFDB4E',
        'htmlOrange': '#FC4909',
        'cssBlue': '#214CE4',
        'twBlue': '#38BDF8',
        'bulmaGreen': '#04D1B2',
        'bsPurple': '#8050B9',
        'reactBlue': '#68DBFB',
        'njsBlack': '#080808',
      },
      animation: {
        'spin-slow': 'spin 6s linear infinite',
      }
    },
  },
  plugins: [],
}
