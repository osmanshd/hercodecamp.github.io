/** @type {import("@types/tailwindcss/tailwind-config").TailwindConfig } */

module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}"],
  mode: "jit",
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      keyframes: {
        fadeUp: {
          "0%": {
            opacity: "0",
            transform: "translate3d(0, 50%, 0)",
          },
          "100%": {
            opacity: "1",
            transform: "translate3d(0, 0, 0)",
          },
        },
      },
      animation: {
        fadeUp: "fadeUp 0.5s ease 0.5s 1 normal forwards",
      },
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
        black: "10px 10px 0 0 #000",
      },
      backgroundImage: {
        "radial-gradient-tl":
          "radial-gradient(circle at 0% 0%, var(--tw-gradient-stops)) 50%",
        "radial-gradient-c":
          "radial-gradient(circle at 50% 50%, var(--tw-gradient-stops)) ",
        "radial-gradient-tr":
          "radial-gradient(circle at 0% 100%, var(--tw-gradient-stops)) 50%",
        "radial-gradient-br":
          "radial-gradient(circle at 100% 100%, var(--tw-gradient-stops) 50%)",
        "radial-gradient-bl":
          "radial-gradient(circle at 0% 100%, var(--tw-gradient-stops)) 50%",
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
  plugins: [
    require("@tailwindcss/aspect-ratio"),
    require("@tailwindcss/typography"),
  ],
}
