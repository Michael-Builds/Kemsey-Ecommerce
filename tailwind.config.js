export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      screens: {
        sm: "576px",
        md: "768px",
        lg: "992px",
        xl: "1200px",
      },
      container: {
        center: true,
        padding: "1rem",
      },
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
        roboto: ["Roboto", "sans-serif"],
        quicksand: ['Quicksand', 'cursive'],
        yeseva: ['Yeseva One', 'cursive'],
      },
      colors: {
        primary: "#fd3d57",
        orange: " #fd6506",
      },
    },
  },
  darkMode: 'class',
  plugins: [],
};
