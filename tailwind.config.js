/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'ankole': {
          'primary': '#8B4513',    // Rich brown
          'secondary': '#D2B48C',  // Tan
          'accent': '#CD853F',     // Peru
          'light': '#F5DEB3',      // Wheat
          'dark': '#654321',       // Dark brown
        },
      },
      fontFamily: {
        'display': ['Ankole-Display', 'serif'],
        'text': ['Ankole-Text', 'sans-serif'],
      },
      backgroundImage: {
        'hero-pattern': "url('/src/assets/images/backgrounds/cultural-pattern.png')",
      },
    },
  },
  plugins: [],
} 