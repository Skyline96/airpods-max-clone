/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'apple-blue': '#007AFF',
        'apple-gray': {
          50: '#F5F5F7',
          100: '#E5E5E7',
          200: '#D2D2D7',
          300: '#C7C7CC',
          400: '#AEAEB2',
          500: '#8E8E93',
          600: '#636366',
          700: '#48484A',
          800: '#3A3A3C',
          900: '#1C1C1E',
        },
        'airpods': {
          midnight: {
            light: '#2a3139',
            dark: '#22252a'
          },
          starlight: {
            light: '#ccbeb1',
            dark: '#e9e1d4'
          },
          blue: {
            light: '#91a9b5',
            dark: '#64727d'
          },
          purple: {
            light: '#afa6bb',
            dark: '#dad7e0'
          },
          orange: {
            light: '#e2a48d',
            dark: '#ffc09d'
          }
        }
      }
    },
  },
  plugins: [],
}

