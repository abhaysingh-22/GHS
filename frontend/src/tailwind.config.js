/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
    './src/**/*.{js,jsx,ts,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        // ...existing color extensions...
      },
      // ...existing theme extensions...
    },
  },
  plugins: [
    // ...existing plugins...
  ],
}