import type { Config } from "tailwindcss";

export default {
  darkMode: ["class"],
  content: ["./pages/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}", "./app/**/*.{ts,tsx}", "./src/**/*.{ts,tsx}"],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      fontFamily: {
        rubik: ['Rubik', 'sans-serif'],
      },
      fontSize: {
        'body': ['14px', '22px'],
        'title': ['16px', '24px'],
        'sm': ['13px', '20px'],
        'xs': ['12px', '18px'],
      },
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        customGray:'#ECECE1',
        primary: {
          DEFAULT: "#006E74",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "#0097AC",
          foreground: "hsl(var(--secondary-foreground))",
        },
        success: {
          DEFAULT: "#01B27C",
          foreground: "hsl(var(--success-foreground))",
        },
        warning: {
          DEFAULT: "#FFBF00",
          foreground: "hsl(var(--warning-foreground))",
        },
        danger: {
          DEFAULT: "#FC6A59",
          foreground: "hsl(var(--danger-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "#FFFFFF",
          foreground: "hsl(var(--card-foreground))",
          hover: "#4A4A4A",
          "hover-foreground": "#FFFFFF",
        },
        text: {
          primary: "#231F20",
          muted: "#7A7480",
        },
        "border-light": "#D7E0E3",
        "bg-main": "#F2F7F8",
        sidebar: {
          DEFAULT: "hsl(var(--sidebar-background))",
          foreground: "hsl(var(--sidebar-foreground))",
          primary: "hsl(var(--sidebar-primary))",
          "primary-foreground": "hsl(var(--sidebar-primary-foreground))",
          accent: "hsl(var(--sidebar-accent))",
          "accent-foreground": "hsl(var(--sidebar-accent-foreground))",
          border: "hsl(var(--sidebar-border))",
          ring: "hsl(var(--sidebar-ring))",
        },
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
        "slide-down": {
          from: { opacity: "0", transform: "translateY(-10px)" },
          to: { opacity: "1", transform: "translateY(0)" },
        },
        "fade-in": {
          from: { opacity: "0" },
          to: { opacity: "1" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        "slide-down": "slide-down 0.2s ease-out",
        "fade-in": "fade-in 0.2s ease-out",
      },
      boxShadow: {
        card: "0 1px 3px rgba(0, 0, 0, 0.08)",
        "card-hover": "0 4px 12px rgba(0, 0, 0, 0.15)",
        dropdown: "0 4px 20px rgba(0, 0, 0, 0.15)",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;
