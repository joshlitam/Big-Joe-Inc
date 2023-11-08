/** @type {import('tailwindcss').Config} */
module.exports = {
  daisyui: {
    themes: []
  },
  darkMode: 'class',
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './Components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      minHeight: {
        '1/2': '50vh',
        '3/4': '75vh',
        '3/5': '60vh',
        '4/5': '80vh',
      },
      minWidth: {
        '1/4': '25vh',
        '3/4' : '75vh',
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'hero-pattern': 'url("/img/hero-pattern.jpg")',
        'hero-pattern-2': 'url("/img/hero-pattern-2.jpg")',
        'hero-pattern-3': 'url("/img/hero-pattern-3.jpg")',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      flex: {
        '3': '3 3 0%',
        '2': '2 2 0%',
      },
      height: {
        '2/3': '66vh'
      }
    },
  },
  plugins: [require("daisyui")],
}
