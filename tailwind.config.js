/** @type {import("@types/tailwindcss/tailwind-config").TailwindConfig } */
module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}"],
  mode: "jit",
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        iris: "#4857E2",
        icterine: "#F0EA50",
        darkJungleGreen: "#1F2421",
        paleSilver: "#C6C1BE",
        flame: "#DC602E",
        foresGreenCrayola: "#6BAA75",
        darkOraange: "#F58A07",
      },
    },
    fontFamily: {
      sans: ['"Roboto Condensed"', "Helvetica", "Arial", "sans-serif"],
      mono: ['"Press Start 2P"', "monospace"],
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
