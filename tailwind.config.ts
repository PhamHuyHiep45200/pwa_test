import type { Config } from "tailwindcss";
import { tailwindConfig } from "./app/config/taiwind";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      ...tailwindConfig,
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      fontFamily: {
        sans: ["Noto Sans JP", "sans-serif"],
        barlow: ["BarLow", "sans-serif"],
      },
    },
  },
  plugins: [],
};

export default config;
