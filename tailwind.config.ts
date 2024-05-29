import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        orange: {
          DEFAULT: "#D87D4A",
          light: "#FBAF85",
        },
        black: {
          DEFAULT: "#000000",
          light: "#101010",
        },
        gray: {
          dark: "#F1F1F1",
          light: "#FAFAFA",
        },
      },
      fontSize: {
        "custom-4xl": [
          "56px",
          {
            lineHeight: "58px",
            letterSpacing: "2px",
            fontWeight: "700",
          },
        ],
        "custom-3xl": [
          "40px",
          {
            lineHeight: "44px",
            letterSpacing: "1.5px",
            fontWeight: "700",
          },
        ],
        "custom-2xl": [
          "32px",
          {
            lineHeight: "36px",
            letterSpacing: "1.15px",
            fontWeight: "700",
          },
        ],
        "custom-xl": [
          "28px",
          {
            lineHeight: "38px",
            letterSpacing: "2px",
            fontWeight: "700",
          },
        ],
        "custom-lg": [
          "24px",
          {
            lineHeight: "33px",
            letterSpacing: "1.7px",
            fontWeight: "700",
          },
        ],
        "custom-md": [
          "18px",
          {
            lineHeight: "24px",
            letterSpacing: "1.3px",
            fontWeight: "700",
          },
        ],
        "custom-overline": [
          "14px",
          {
            lineHeight: "19px",
            letterSpacing: "10px",
            fontWeight: "400",
          },
        ],
        "custom-subtitle": [
          "13px",
          {
            lineHeight: "25px",
            letterSpacing: "1px",
            fontWeight: "700",
          },
        ],
        "custom-base": [
          "15px",
          {
            lineHeight: "25px",
            fontWeight: "500",
          },
        ],
      },
    },
  },
  plugins: [],
};
export default config;
