/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    fontFamily: { display: ["Poppins", "sans-serif"] },
    extend: {},
    colors: {
      redditOrange: "#FF5700",
      orangeRed: "#FF4500",
      upvote: "	#FF8b60",
      neutral: "#C6C6C6",
      downvote: "#9494FF",
      lightBg: "#EFF7FF",
      header: "#CEE3F8",
      uiText: "#336699",
      white: "#FFFFFF",
      black: "#000000",
      lightGray: "#f8f8f8",
    },
  },
  plugins: [],
};
