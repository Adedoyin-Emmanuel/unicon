import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],

  daisyui: {
    themes: [
      {
        mytheme: {
          primary: "#E51E56",
          secondary: "#EA4876",
          accent: "#f291ad",
          neutral: "#ffffff",
          "base-100": "#ffffff",
          info: "#62CCF9",
          success: "#2CC98F",
          warning: "#FBC337",
          error: "#F76464",
        },
      },
    ],
  },
  plugins: [require("daisyui")],
};
export default config;
