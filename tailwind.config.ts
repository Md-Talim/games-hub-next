import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      borderWidth: {
        3: "3px",
      },
      fontFamily: {
        mono: ["var(--font-mono)"],
        sans: ["var(--font-sans)"],
      },
      colors: {
        springBud: "#9dff00" /* lime green */,
        mineShaft: "#313131" /* dark gray */,
        black: "#000000" /* black */,
        white: "#ffffff" /* white */,
        battleshipGray: "#828282" /* medium gray */,
        mountainMist: "#949494" /* medium gray */,
        licorice: "#111111" /* almost black */,
        codGray: "#2f2f2f" /* dark gray */,
        silverCloud: "#C6C7C4" /* light gray - for texts */,
        gamersGlory: "#32965D" /* Shamrock green */,
        midScoreMustard: "#FFAD02" /* Orange */,
      },
    },
  },
  plugins: [],
};
export default config;
