/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: ['./app/**/*.{js,ts,jsx,tsx,mdx}', './components/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: {
    extend: {
      colors: {
        maple: {
          cream: '#f7f1e3',
          earth: '#d9c4a1',
          forest: '#1f3b2d',
          moss: '#335945',
          charcoal: '#222222',
        },
      },
      boxShadow: {
        card: '0 12px 32px rgba(0, 0, 0, 0.08)',
      },
    },
  },
  plugins: [],
};
