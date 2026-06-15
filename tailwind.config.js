/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          navy: {
            deep: "#060B13",
            dark: "#0A111E",
            card: "#121B2A",
            border: "#1E293B",
            muted: "#64748B",
          },
          orange: {
            DEFAULT: "#FF5722",
            glow: "rgba(255, 87, 34, 0.15)",
            bright: "#FF7043",
            dark: "#E64A19",
          },
        },
      },
      fontFamily: {
        sans: ["Outfit", "Inter", "sans-serif"],
      },
      animation: {
        "float-slow": "float 6s ease-in-out infinite",
        "pulse-slow": "pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite",
        "glow-pulse": "glow 3s ease-in-out infinite alternate",
        "orbit": "orbit 20s linear infinite",
        "orbit-reverse": "orbit-reverse 25s linear infinite",
        "orbit-fast": "orbit 15s linear infinite",
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-10px)" },
        },
        glow: {
          "0%": { boxShadow: "0 0 15px rgba(255, 87, 34, 0.2)" },
          "100%": { boxShadow: "0 0 35px rgba(255, 87, 34, 0.6)" },
        },
        orbit: {
          "0%": { transform: "rotate(0deg)" },
          "100%": { transform: "rotate(360deg)" },
        },
        "orbit-reverse": {
          "0%": { transform: "rotate(360deg)" },
          "100%": { transform: "rotate(0deg)" },
        },
      },
    },
  },
  plugins: [],
}
