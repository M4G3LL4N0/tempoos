import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}"
  ],
  theme: {
    extend: {
      colors: {
        background: "#030A1A",
        foreground: "#F0F4FF",
        muted: "#8B9CC7",
        line: "rgba(255,255,255,0.1)",
        emerald: {
          100: "#D2FFEC",
          200: "#7FFFD4",
          300: "#49F2B8",
          400: "#2AD890",
          500: "#1ACB84"
        },
        navy: {
          100: "#E0E8FF",
          200: "#8BA4FF",
          300: "#5E7BFF",
          400: "#3D5AFE",
          500: "#1A3AFF"
        },
        violet: {
          100: "#EDE2FF",
          200: "#9D7CFF",
          300: "#7D5AFF",
          400: "#5D3AFF",
          500: "#3D1AFF"
        }
      },
      boxShadow: {
        glow: "0 0 120px rgba(73, 242, 184, 0.2)",
        "glow-md": "0 0 80px rgba(73, 242, 184, 0.15)",
        "glow-sm": "0 0 40px rgba(73, 242, 184, 0.1)"
      },
      backgroundImage: {
        grid: "linear-gradient(to right, rgba(255,255,255,0.06) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.06) 1px, transparent 1px)",
        "glass-panel": "linear-gradient(180deg, rgba(255,255,255,0.08), rgba(255,255,255,0.03))",
        "glass-panel-strong": "linear-gradient(180deg, rgba(255,255,255,0.12), rgba(255,255,255,0.04))"
      }
    }
  },
  plugins: []
};

export default config;
