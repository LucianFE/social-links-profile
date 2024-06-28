/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html"],
  theme: {
    extend: {
      colors: {
        greenLime: "hsl(75, 94%, 57%)",
        greyClr: "hsl(0, 0%, 20%)",
        darkGrey: "hsl(0, 0%, 12%)",
        offBlack: "hsl(0, 0%, 8%)",
      },
      fontFamily: {
        inter: "Inter, sans-serif",
      },
    },
  },
  plugins: [],
};
