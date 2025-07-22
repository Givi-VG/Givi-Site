/** @type {import('tailwindcss').Config} */
export default {
  darkMode: ["class"],
  content: [
    './pages/**/*.{js,jsx}',
    './components/**/*.{js,jsx}',
    './app/**/*.{js,jsx}',
    './src/**/*.{js,jsx}',
  ],
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
      colors: {
        border: "var(--color-border)", /* neutral separator */
        input: "var(--color-input)", /* input background */
        ring: "var(--color-ring)", /* focus ring color */
        background: "var(--color-background)", /* deep space black */
        foreground: "var(--color-foreground)", /* maximum readability white */
        primary: {
          DEFAULT: "var(--color-primary)", /* trust-building accent */
          foreground: "var(--color-primary-foreground)", /* white text on primary */
        },
        secondary: {
          DEFAULT: "var(--color-secondary)", /* subtle depth */
          foreground: "var(--color-secondary-foreground)", /* white text on secondary */
        },
        destructive: {
          DEFAULT: "var(--color-destructive)", /* clear concern */
          foreground: "var(--color-destructive-foreground)", /* white text on destructive */
        },
        muted: {
          DEFAULT: "var(--color-muted)", /* gentle separation */
          foreground: "var(--color-muted-foreground)", /* secondary text hierarchy */
        },
        accent: {
          DEFAULT: "var(--color-accent)", /* success states */
          foreground: "var(--color-accent-foreground)", /* dark text on accent */
        },
        popover: {
          DEFAULT: "var(--color-popover)", /* popover background */
          foreground: "var(--color-popover-foreground)", /* popover text */
        },
        card: {
          DEFAULT: "var(--color-card)", /* subtle depth variation */
          foreground: "var(--color-card-foreground)", /* white text on cards */
        },
        success: {
          DEFAULT: "var(--color-success)", /* encouraging progress */
          foreground: "var(--color-success-foreground)", /* dark text on success */
        },
        warning: {
          DEFAULT: "var(--color-warning)", /* helpful guidance */
          foreground: "var(--color-warning-foreground)", /* dark text on warning */
        },
        error: {
          DEFAULT: "var(--color-error)", /* clear concern */
          foreground: "var(--color-error-foreground)", /* white text on error */
        },
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        mono: ['JetBrains Mono', 'monospace'],
      },
      fontSize: {
        'xs': ['0.75rem', { lineHeight: '1rem' }],
        'sm': ['0.875rem', { lineHeight: '1.25rem' }],
        'base': ['1rem', { lineHeight: '1.5rem' }],
        'lg': ['1.125rem', { lineHeight: '1.75rem' }],
        'xl': ['1.25rem', { lineHeight: '1.75rem' }],
        '2xl': ['1.5rem', { lineHeight: '2rem' }],
        '3xl': ['1.875rem', { lineHeight: '2.25rem' }],
        '4xl': ['2.25rem', { lineHeight: '2.5rem' }],
        '5xl': ['3rem', { lineHeight: '1' }],
        '6xl': ['3.75rem', { lineHeight: '1' }],
        '7xl': ['4.5rem', { lineHeight: '1' }],
        '8xl': ['6rem', { lineHeight: '1' }],
        '9xl': ['8rem', { lineHeight: '1' }],
      },
      spacing: {
        '18': '4.5rem',
        '88': '22rem',
        '128': '32rem',
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        "fade-in": "fade-in 0.5s ease-out",
        "slide-in": "slide-in 0.3s ease-out",
        "float": "float 4s ease-in-out infinite",
        "pulse-glow": "pulse-glow 2s ease-in-out infinite",
        "rotate-slow": "rotate-slow 20s linear infinite",
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
        "fade-in": {
          "0%": { opacity: "0", transform: "translateY(10px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        "slide-in": {
          "0%": { transform: "translateX(-100%)" },
          "100%": { transform: "translateX(0)" },
        },
        "float": {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-3px)" },
        },
        "pulse-glow": {
          "0%, 100%": { boxShadow: "0 0 20px rgba(79, 140, 247, 0.3)" },
          "50%": { boxShadow: "0 0 40px rgba(79, 140, 247, 0.6)" },
        },
        "rotate-slow": {
          "0%": { transform: "rotate(0deg)" },
          "100%": { transform: "rotate(360deg)" },
        },
      },
      backdropBlur: {
        xs: '2px',
      },
      boxShadow: {
        'glow': '0 0 20px rgba(79, 140, 247, 0.3)',
        'glow-lg': '0 0 40px rgba(79, 140, 247, 0.4)',
        'card': '0 2px 8px rgba(0, 0, 0, 0.4)',
        'elevated': '0 4px 20px rgba(0, 0, 0, 0.3)',
      },
      transitionTimingFunction: {
        'smooth': 'cubic-bezier(0.4, 0, 0.2, 1)',
      },
      transitionDuration: {
        '300': '300ms',
        '600': '600ms',
        '800': '800ms',
      },
    },
  },
  plugins: [
    require("tailwindcss-animate"),
  ],
}