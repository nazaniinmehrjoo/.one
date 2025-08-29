/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      keyframes: {
        fadeIn: { "0%": { opacity: 0 }, "100%": { opacity: 1 } },
        fadeInUp: {
          "0%": { opacity: 0, transform: "translateY(16px)" },
          "100%": { opacity: 1, transform: "translateY(0)" }
        },
        slideInRtl: { 
          "0%": { opacity: 0, transform: "translateX(24px)" },
          "100%": { opacity: 1, transform: "translateX(0)" }
        }
      },
      animation: {
        "fade-in": "fadeIn 600ms ease-out both",
        "fade-in-up": "fadeInUp 650ms ease-out both",
        "slide-in-rtl": "slideInRtl 700ms ease-out both",
      },
      fontFamily: {
        iransans: ["IRANSans", "sans-serif"],
      },
      container: {
        center: true,                    
        padding: { DEFAULT: '1rem', md: '2rem' },
        screens: {
          sm: '640px',
          md: '768px',
          lg: '1024px',
          xl: '1280px',
          '2xl': '1400px',               
        },
      },
    },
  },
  plugins: [],
};
