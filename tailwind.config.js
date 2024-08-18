/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "green-100": "#388087",
        "green-200": "#2c666a",
        "white-100": "#fefefe",
        "white-200": "#aaa",
        "red-100": "#ff5f52",
      },
    },
    plugins: [],
  },
};
