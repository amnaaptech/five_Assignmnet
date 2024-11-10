import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        rye: ['Rye', 'sans-serif'],
        libre: ['Libre Bodoni', 'serif'],
      },
    },
  },
  plugins: [],
} satisfies Config;
