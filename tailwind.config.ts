import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        purple: "#633CFF",
        "purple-hover-color": "#BEADFF",
        "light-purple": "EFEBFF",
        "dark-grey": "#333333",
        grey: "#737373",
        borders: "#D9D9D9",
        "light-grey": "#FAFAFA",
        white: "#FFFFFF",
        red: "#FF3939",
      },
      fontFamily: {
        sans: ["'Instrument Sans'", "sans-serif"],
      },

      boxShadow: {
        "focus-input": "0px 0px 32px 0px rgba(99, 60, 255, 0.25)",
      },
    },
  },
  plugins: [],
};
export default config;
