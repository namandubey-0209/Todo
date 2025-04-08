// tailwind.config.js
import defaultTheme from 'tailwindcss/defaultTheme';

export default {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: defaultTheme.colors, // ✅ this brings back all default Tailwind colors
    },
  },
  safelist: [
    'text-neutral-500',
    'line-through',
  ],
  plugins: [],
};
