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
        primary: '#064f38',
        secondary: '#bbea70',
        secondary_hover: '#bce778d3',
        delete: '#b91c1c',
        delete_hover: '#dc2626',
        dark_orange: '#431407',
        yellowish: '#cee1af90',
        yellowish_hover: '#cee9a490',
        customGray: '#f3f4f6',
      },
      boxShadow: {
        'custom-xl': '0 8px 12px -3px rgba(153, 79, 133, 0.2), 0 3px 5px -2px rgba(153, 79, 133, 0.15)',
      },
      fontFamily: {
        jost: ['Jost', 'system-ui', '-apple-system', 'BlinkMacSystemFont', 
               'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 
               'Open Sans', 'Helvetica Neue', 'sans-serif']
      },
    },
  },
  plugins: [],
};
export default config;
