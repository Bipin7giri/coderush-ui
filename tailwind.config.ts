import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        manrope: ["Poppins", "sans"], // Define a 'manrope' font family
      },
      colors: {
        danger: {
          DEFAULT: "#F53F3F",
          "2": "#A1151E",
          "3": "#FBACA3",
          "4": "#FFECE8",
        },
        success: {
          DEFAULT: "#00B42A",
          "2": "#008026",
          "3": "#7BE188",
          "4": "#E8FFEA",
        },
        background: {
          DEFAULT: "#FFFFFF",
        },
        info: {
          DEFAULT: "#3491FA",
          "2": "#072CA6",
          "3": "#9FD4FD",
          "4": "#E8F7FF",
        },
        primary: {
          DEFAULT: "#000000",
          "2": "#F4DFC8",
          "3": "#F4EAE0",
          "4": "#FAF6F0",
        },
        secondary: {
          DEFAULT: "#6420AA",
          "2": "#f5f5f5",
        },
        description: {
          DEFAULT: "#C9CDD4",
          "2": "#86909C",
          "3": "#C9CDD4",
        },
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
  },
  plugins: [],
};
export default config;
