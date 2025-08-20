/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./app/**/*.{vue,js,ts,jsx,tsx}",
    "./components/**/*.{vue,js,ts,jsx,tsx}",
    "./layouts/**/*.{vue,js,ts,jsx,tsx}",
    "./pages/**/*.{vue,js,ts,jsx,tsx}",
  ],
  darkMode: 'class', // class tabanlı dark mode
  theme: {
    extend: {

      
      transitionDuration: {
        '1000': '1s',
      },
      colors: {
        'light-brown': '#D7B68D',
        'metallic-gray': '#AFAFAF',
        'metallic': '#333333',
        'light-blue': '#ADD8E6',
        'darkBackground': '#1a202c',
        'darkText': '#f7fafc',
         grape: 'rgba(var(--grape))',
         customRed:'rgba(var(--customRed))',
         'primary':'rgba(var(--text-primary))',
         'secondary':'rgba(var(--text-secondary))',
          'accent':'rgba(var(--text-accent))', 
        white: 'rgba(var(--text-white))',
      },
    },
  },
  plugins: [],
}