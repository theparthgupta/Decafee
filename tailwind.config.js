/** @type {import('tailwindcss').Config} */
export default {
  darkMode: ["class"],
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      borderRadius: {
        lg: 'var(--radius)',
        md: 'calc(var(--radius) - 2px)',
        sm: 'calc(var(--radius) - 4px)',
      },
      colors: {
        // Custom Colors for dark brown forest wood and dark forest green theme
        background: 'hsl(120, 20%, 20%)', // Dark Forest Green
        foreground: 'hsl(30, 30%, 30%)', // Dark Brown (Wood)
        card: {
          DEFAULT: 'hsl(30, 30%, 35%)', // Dark Brown Wood
          foreground: 'hsl(30, 30%, 70%)', // Light Brown
        },
        primary: {
          DEFAULT: 'hsl(120, 20%, 20%)', // Dark Forest Green
          foreground: 'hsl(120, 20%, 85%)', // Light Forest Green
        },
        secondary: {
          DEFAULT: 'hsl(30, 30%, 30%)', // Dark Brown
          foreground: 'hsl(30, 30%, 50%)', // Medium Brown
        },
        muted: {
          DEFAULT: 'hsl(30, 30%, 20%)', // Dark Brown for muted
          foreground: 'hsl(30, 30%, 50%)',
        },
        accent: {
          DEFAULT: 'hsl(120, 30%, 35%)', // Slightly muted Forest Green
          foreground: 'hsl(120, 30%, 60%)',
        },
        border: 'hsl(30, 30%, 25%)', // Darker Brown for borders
        input: 'hsl(30, 30%, 40%)', // Dark Brown for inputs
        ring: 'hsl(120, 20%, 20%)', // Dark Green ring
        chart: {
          '1': 'hsl(120, 20%, 20%)',
          '2': 'hsl(30, 30%, 40%)',
          '3': 'hsl(30, 30%, 50%)',
          '4': 'hsl(120, 20%, 30%)',
          '5': 'hsl(120, 30%, 45%)',
        },
      },
      animation: {
        'logo-pop': 'popOut 1.5s ease forwards',  // Add custom animation for logo
      },
      keyframes: {
        popOut: {
          '0%': {
            transform: 'scale(0)',
            opacity: '0',
          },
          '50%': {
            transform: 'scale(1.5)',  // Logo pops out to 1.5 times its size
            opacity: '1',
          },
          '100%': {
            transform: 'scale(1)',  // Logo returns to original size
            opacity: '1',
          },
        },
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
};
