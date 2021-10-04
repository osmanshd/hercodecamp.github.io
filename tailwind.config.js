/** @type {import("@types/tailwindcss/tailwind-config").TailwindConfig } */
module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}"],
  mode: "jit",
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        iris: "#4857E2",
        darkIris: "#222e7a",
        icterine: "#F0EA50",
        darkJungleGreen: "#1F2421",
        paleSilver: "#C6C1BE",
        flame: "#DC602E",
        foresGreenCrayola: "#6BAA75",
        darkOraange: "#F58A07",
      },
      boxShadow: {
        // TODO: this should use the actual colors so it stays consistent
        icterine: "10px 10px 0 0 #4857E2",
      },
    },
    fontFamily: {
      sans: ['"Roboto Condensed"', "Helvetica", "Arial", "sans-serif"],
      body: ["IBM Plex Sans"],
      pressStart: ['"Press Start 2P"', "monospace"],
      mono: ['"Roboto Mono"', "monospace"],
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
