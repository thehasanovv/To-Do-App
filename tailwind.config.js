module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {},
    fontFamily: {
      sans: ["Exo\\ 2", "sans-serif"],
    },
  },
  plugins: [require("@tailwindcss/forms")],
};
