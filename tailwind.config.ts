import type { Config } from "tailwindcss";

const config: Config = {
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-ibm-plex-sans-thai)", "sans-serif"],
      },
    },
  },
};
export default config;
