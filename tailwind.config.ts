import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./lib/**/*.{js,ts,jsx,tsx,mdx}"
  ],
  theme: {
    extend: {
      colors: {
        navy: "#06141a",
        ink: "#17222a",
        cream: "#f4efe6",
        paper: "#fbf8f1",
        teal: "#5e7b7f",
        "teal-dark": "#3f6268",
        gold: "#c6a35b",
        mist: "#dfe7df"
      },
      fontFamily: {
        serif: ["var(--font-playfair)", "Georgia", "serif"],
        sans: ["var(--font-inter)", "Arial", "sans-serif"]
      },
      boxShadow: {
        soft: "0 16px 40px rgba(8, 28, 33, 0.14)",
        card: "0 10px 24px rgba(11, 24, 29, 0.12)"
      }
    }
  },
  plugins: []
};

export default config;
