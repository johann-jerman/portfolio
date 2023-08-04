/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundColor: {
        'a-o': '#136365',
        'a-c': '#1b8d90',
        'v': '#4701a3',
        'r-o': '#a99ec2',
        'r-cr': '#e4cedd',
        'b': '#f5f5ee',
        'g': '#a0bece',
      }
    },
  },
  plugins: [],
};
