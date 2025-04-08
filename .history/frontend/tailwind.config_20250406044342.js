/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
      "./index.html",
      "./src/**/*.{js,ts,jsx,tsx}", // Adjust based on your file extensions
    ],
    theme: {
      extend: {
        colors: {
          primary: '#3b82f6', // Example custom color
        },
      },
    },
    plugins: [],
  }