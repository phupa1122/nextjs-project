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
        background: "var(--background)",
        foreground: "var(--foreground)",

        pink1: "#EC407A",
        blue1: "#407AEC",
        red1: "#FF2D47",
        green1: "#13C648",
        black1: "#21211F",
        white1: "#E3DFD8",
        gray1: "#7A7772",
        
      },
    },
  },
  plugins: [
    require('daisyui'),
  ],
};
export default config;
