/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Inter", "sans-serif"], // For body text
        serif: ["Roboto Slab", "serif"], // For headings
        display: ["Poppins", "sans-serif"], // For display and prominent text
      },
    },
  },
  plugins: [],
};
