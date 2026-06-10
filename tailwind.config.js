/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        bg: {
          base: "#0a0a0f",
          surface: "#111118",
          elevated: "#16161f",
          border: "#1e1e2e",
        },
        accent: {
          primary: "#7c6ef7",
          secondary: "#c084fc",
          glow: "#7c6ef740",
          subtle: "#7c6ef715",
        },
        text: {
          primary: "#e8e8f0",
          secondary: "#8888a8",
          muted: "#4a4a6a",
        },
        success: "#34d399",
        warning: "#fbbf24",
      },
      fontFamily: {
        sans: ["var(--font-inter)", "system-ui", "sans-serif"],
        display: ["var(--font-syne)", "system-ui", "sans-serif"],
        mono: ["var(--font-jetbrains)", "monospace"],
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-mesh":
          "radial-gradient(at 40% 20%, #7c6ef720 0px, transparent 50%), radial-gradient(at 80% 0%, #c084fc15 0px, transparent 50%), radial-gradient(at 0% 50%, #7c6ef710 0px, transparent 50%)",
      },
      animation: {
        "pulse-slow": "pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite",
        shimmer: "shimmer 2s linear infinite",
        "glow-pulse": "glow-pulse 2s ease-in-out infinite",
      },
      keyframes: {
        shimmer: {
          "0%": { backgroundPosition: "-200% 0" },
          "100%": { backgroundPosition: "200% 0" },
        },
        "glow-pulse": {
          "0%, 100%": { opacity: "0.4" },
          "50%": { opacity: "1" },
        },
      },
      boxShadow: {
        glow: "0 0 20px #7c6ef740, 0 0 60px #7c6ef720",
        "glow-sm": "0 0 10px #7c6ef730",
        card: "0 1px 3px rgba(0,0,0,0.5), 0 0 0 1px #1e1e2e",
      },
    },
  },
  plugins: [],
};