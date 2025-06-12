import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./index.html", "./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        sage: {
          400: "#A3B18A"
        },
        beige: {
          100: "#F8F7F4"
        },
        charcoal: {
          800: "#2D2D2A"
        },
        rose: {
          300: "#F6BDC0"
        }
      },
      fontFamily: {
        heading: ["Outfit", "sans-serif"],
        body: ["Inter", "sans-serif"]
      }
    }
  },
  plugins: []
};

export default config;
