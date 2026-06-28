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
        brand: {
          bg: "#050806",
          "bg-elevated": "#09100b",
          surface: "#0c160f",
          "surface-secondary": "#102015",
          "green-primary": "#2ca640",
          "green-bright": "#47c34f",
          "green-dark": "#0c5a29",
          "red-primary": "#d9232e",
          "red-hover": "#ef3340",
          gold: "#d2a74f",
          ivory: "#f4f1e8",
          "text-primary": "#f6f5ef",
          "text-secondary": "#aeb9b0",
        },
      },
      fontFamily: {
        heading: ["var(--font-oswald)", "sans-serif"],
        body: ["var(--font-inter)", "sans-serif"],
      },
      maxWidth: {
        "8xl": "1440px",
      },
    },
  },
  plugins: [],
};
export default config;
