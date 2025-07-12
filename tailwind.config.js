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
      },
      fontFamily: {
        'sf': ['-apple-system', 'BlinkMacSystemFont', 'San Francisco', 'Helvetica Neue', 'Helvetica', 'Arial', 'sans-serif'],
        'sf-display': ['SF Pro Display', '-apple-system', 'BlinkMacSystemFont', 'sans-serif'],
        'sf-text': ['SF Pro Text', '-apple-system', 'BlinkMacSystemFont', 'sans-serif']
      },
      fontSize: {
        'hero': ['80px', { lineHeight: '1.15', letterSpacing: '-0.03em' }],
        'hero-mobile': ['40px', { lineHeight: '1.15', letterSpacing: '-0.02em' }],
        'section': ['56px', { lineHeight: '1.15', letterSpacing: '-0.02em' }],
        'section-mobile': ['28px', { lineHeight: '1.15', letterSpacing: '-0.01em' }],
      },
      animation: {
        'fade-in': 'fadeIn 0.6s ease-out',
        'slide-up': 'slideUp 0.8s ease-out',
        'scale-in': 'scaleIn 0.4s ease-out',
        'blur-in': 'blurIn 0.3s ease-out',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { transform: 'translateY(20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        scaleIn: {
          '0%': { transform: 'scale(0.95)', opacity: '0' },
          '100%': { transform: 'scale(1)', opacity: '1' },
        },
        blurIn: {
          '0%': { filter: 'blur(10px)', opacity: '0' },
          '100%': { filter: 'blur(0)', opacity: '1' },
        },
      },
      backdropBlur: {
        'xs': '2px',
      },
      spacing: {
        '18': '4.5rem',
        '88': '22rem',
        '128': '32rem',
      },
      borderRadius: {
        '4xl': '2rem',
        '5xl': '2.5rem',
      },
      transitionDuration: {
        '400': '400ms',
        '600': '600ms',
        '800': '800ms',
      }
    },
  },
  plugins: [
    // Custom plugin for Apple-style backdrop blur
    function({ addUtilities }) {
      const newUtilities = {
        '.backdrop-blur-apple': {
          'backdrop-filter': 'blur(20px) saturate(180%)',
          'background-color': 'rgba(255, 255, 255, 0.8)',
        },
        '.backdrop-blur-apple-dark': {
          'backdrop-filter': 'blur(20px) saturate(180%)',
          'background-color': 'rgba(0, 0, 0, 0.8)',
        },
      }
      addUtilities(newUtilities)
    }
  ],
}

