/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{html,js,ts,jsx,tsx,css,scss}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Inter var", "Inter", "sans-serif"],
        display: ["Libre Franklin", "serif"],
      },
    },
  },
  plugins: [],
};
