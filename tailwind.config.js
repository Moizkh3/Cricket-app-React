/** @type {import('tailwindcss').Config} */
export default {
  darkMode: ["class"],
  content: [
    "./client/src/**/*.{js,jsx,ts,tsx}",
    "./client/index.html",
  ],
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "#86EFAC",
        foreground: "#166534",
        primary: {
          DEFAULT: "#16A34A",
          foreground: "#FFFFFF",
          light: "#22C55E",
          dark: "#15803D",
          hover: "#166534",
        },
        secondary: {
          DEFAULT: "#22C55E",
          foreground: "#FFFFFF",
          light: "#4ADE80",
          dark: "#16A34A",
          hover: "#15803D",
        },
        accent: {
          DEFAULT: "#4ADE80",
          foreground: "#FFFFFF",
          light: "#86EFAC",
          dark: "#22C55E",
          hover: "#16A34A",
        },
        destructive: {
          DEFAULT: "#DC2626",
          foreground: "#FFFFFF",
        },
        muted: {
          DEFAULT: "#BBF7D0",
          foreground: "#166534",
        },
        popover: {
          DEFAULT: "#FFFFFF",
          foreground: "#166534",
        },
        card: {
          DEFAULT: "#FFFFFF",
          foreground: "#166534",
          border: "#86EFAC",
        },
        cricket: {
          field: "#16A34A",
          pitch: "#15803D",
          grass: "#22C55E",
          light: "#BBF7D0",
          dark: "#14532D",
          accent: "#4ADE80",
          score: "#FFD700",
          boundary: "#FFA500",
          wicket: "#166534",
        }
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
        "cricket-ball-spin": {
          "0%": { 
            transform: "translateY(0) translateX(-10px) rotate(0deg) scale(1)",
            animationTimingFunction: "cubic-bezier(0.8, 0, 1, 1)"
          },
          "25%": {
            transform: "translateY(-30px) translateX(0px) rotate(180deg) scale(1.1)",
            animationTimingFunction: "cubic-bezier(0.2, 0, 0.8, 1)"
          },
          "50%": {
            transform: "translateY(0) translateX(10px) rotate(360deg) scale(1)",
            animationTimingFunction: "cubic-bezier(0.8, 0, 1, 1)"
          },
          "75%": {
            transform: "translateY(-15px) translateX(0px) rotate(540deg) scale(1.1)",
            animationTimingFunction: "cubic-bezier(0.2, 0, 0.8, 1)"
          },
          "100%": {
            transform: "translateY(0) translateX(-10px) rotate(720deg) scale(1)",
            animationTimingFunction: "cubic-bezier(0.8, 0, 1, 1)"
          }
        },
        "cricket-bat-swing": {
          "0%": { transform: "rotate(-45deg)" },
          "50%": { transform: "rotate(45deg)" },
          "100%": { transform: "rotate(-45deg)" }
        },
        "pitch-shine": {
          "0%": { 
            backgroundPosition: "200% 0",
            opacity: 0.9
          },
          "100%": { 
            backgroundPosition: "-200% 0",
            opacity: 1
          }
        }
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        "cricket-ball": "cricket-ball-spin 3s infinite",
        "cricket-bat": "cricket-bat-swing 3s ease-in-out infinite",
        "pitch-shine": "pitch-shine 4s linear infinite"
      },
      boxShadow: {
        'cricket': '0 4px 6px -1px rgba(22, 163, 74, 0.2), 0 2px 4px -1px rgba(22, 163, 74, 0.1)',
        'cricket-lg': '0 10px 15px -3px rgba(22, 163, 74, 0.2), 0 4px 6px -2px rgba(22, 163, 74, 0.1)',
        'cricket-glow': '0 0 15px rgba(34, 197, 94, 0.5)',
      },
      backgroundImage: {
        'cricket-field': `
          radial-gradient(circle at center, #16A34A 0%, #15803D 100%),
          repeating-linear-gradient(0deg, 
            transparent,
            transparent 20px,
            rgba(255, 255, 255, 0.1) 20px,
            rgba(255, 255, 255, 0.1) 40px
          )
        `,
        'cricket-pitch': `
          linear-gradient(90deg, 
            rgba(22, 163, 74, 0.1) 0%,
            rgba(34, 197, 94, 0.2) 50%,
            rgba(22, 163, 74, 0.1) 100%
          )
        `
      },
      backgroundSize: {
        'cricket': '100% 100%, 40px 40px',
        'cricket-pitch': '200% 100%'
      },
    },
  },
  plugins: [],
}