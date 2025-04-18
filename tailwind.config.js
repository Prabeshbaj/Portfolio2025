/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Apple-inspired color palette
        primary: "#000000", // Black for dark mode
        secondary: "#86868b", // Apple's secondary text color
        tertiary: "#1d1d1f", // Apple's dark gray
        "apple-blue": "#0066cc", // Apple's blue
        "apple-gray": "#f5f5f7", // Apple's light gray background
        "apple-dark": "#1d1d1f", // Apple's dark mode background
        "apple-light": "#ffffff", // Apple's light mode background
        "apple-text": "#1d1d1f", // Apple's primary text color
        "apple-text-secondary": "#86868b", // Apple's secondary text color
      },
      fontFamily: {
        'sf-pro': ['-apple-system', 'BlinkMacSystemFont', 'San Francisco', 'Helvetica Neue', 'sans-serif'],
      },
      boxShadow: {
        'apple': '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
      },
      screens: {
        xs: "450px",
      },
      backgroundImage: {
        "hero-pattern": "url('/src/assets/herobg.png')",
      },
    },
  },
  plugins: [],
} 