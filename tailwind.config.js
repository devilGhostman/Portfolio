/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors:{
        darkBg:'#0f1111'
      }
    },
  },
  plugins: ["prettier-plugin-tailwindcss"],
};
