/** @type {import('tailwindcss').Config} */
export default {
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
        primary: "#5D20D1",
        secondary: "#eee8fa",
        yellow: "#ed9a4d",
        yellow_secondary: "#fdf5ed",
      },
      fontFamily: {
        primary: ["Jakarta", "sans-serif"], // Define your custom font
      },
    },
  },
  plugins: [],
};
