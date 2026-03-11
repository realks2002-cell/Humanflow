import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#E8A020",
        "primary-dark": "#C4861A",
        dark: "#1a1a1a",
      },
      fontFamily: {
        sans: ["var(--font-noto-sans-kr)", "sans-serif"],
      },
    },
  },
  plugins: [],
};
export default config;
