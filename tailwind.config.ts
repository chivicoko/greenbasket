import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        jost: ['Jost', 'system-ui', '-apple-system', 'BlinkMacSystemFont', 
               'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 
               'Open Sans', 'Helvetica Neue', 'sans-serif']
      },
      backgroundColor: {
        "theme": "var(--theme-bg)",
        "btn": "var(--btn-bg)",
        "btn-hover": "var(--btn-hover-bg)",
      },
      borderColor: {
        "theme": "var(--theme-bg)",
      },
      textColor: {
        "theme": "var(--theme-text)",
      },
      height: {
        '80vh': '80vh',
        '70vh': '70vh',
        '60vh': '60vh',
        '50vh': '50vh',
        '40vh': '40vh',
        '30vh': '30vh',
        '20vh': '20vh',
        '10vh': '10vh',
      },
    },
    // colors:{
    //   mainColor: "#064f38"
    // },
  },
  plugins: [],
};
export default config;
