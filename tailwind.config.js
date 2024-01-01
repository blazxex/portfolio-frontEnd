/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      textColor: {
        default: "#ffffff", // Define a custom color class
      },
    },
  },
  plugins: [],
};
