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
      },
      backgroundImage:{
        'instagram-gradient':'linear-gradient(to bottom left, rgba(128,0,128,1) 0%, rgba(255, 192, 203, 1) 50%, rgba(255, 255, 0, 1) 100% )',
      }
    },
  },
  plugins: [],
};
export default config;
