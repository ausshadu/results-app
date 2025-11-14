import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/flowbite-react/lib/**/*.js"
  ],
  theme: {
    extend: {},
  },
  plugins: [],
  darkMode: "class",
};

export default config;
