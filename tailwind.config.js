/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#1d4ed8', // blue-700 approx
          light: '#3b82f6', // blue-500
          dark: '#1e3a8a', // blue-900
        },
        secondary: {
          DEFAULT: '#0f172a', // slate-900
          light: '#1e293b', // slate-800
        },
        accent: {
          DEFAULT: '#38bdf8', // sky-400
          light: '#7dd3fc', // sky-300
        },
        background: {
          DEFAULT: '#f8fafc', // slate-50
          dark: '#f1f5f9', // slate-100
        }
      },
      fontFamily: {
        sans: ['Outfit', 'Inter', 'sans-serif'],
      },
      animation: {
        'float': 'float 3s ease-in-out infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        }
      }
    },
  },
  plugins: [],
}
