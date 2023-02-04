/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./src/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        bgLog: "url('/logbg.svg')",
        bgReg: "url('/regbg.svg')",
      },
      colors: {
        redLight: "#FF8787",
        redDark: "#E26868",
        blueLight: "#C8F2EF",
        blueGrey: "#C3DBD9",
      },
    },
  },
  plugins: [],
};
