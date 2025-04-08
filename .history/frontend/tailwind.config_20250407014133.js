/** @type {import('tailwindcss').Config} */
export default {
    content: [
      './index.html',
      './src/**/*.{js,ts,jsx,tsx}',
    ],
    theme: {
      // 🔥 Add this
      presets: [require('tailwindcss/defaultConfig')],
      extend: {},
    },
    plugins: [],
  };
  