// tailwind.config.js
import defaultTheme from 'tailwindcss/defaultTheme'

export default {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {},
    colors: { ...defaultTheme.colors }, // 👈 this restores all default Tailwind colors
  },
  plugins: [],
};
