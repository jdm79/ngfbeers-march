/** @type {import('tailwindcss').Config} */

const plugin = require('tailwindcss/plugin')

module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      animation: {
        // Bounces 5 times 1s equals 5 seconds
        "bounce-short": "bounce 2s ease-in-out 1.5",
        "bounce-short-text": "bounce 1s ease-in-out 0.5",
        "wiggle": "wiggle 1s ease-in-out 2.5"
      },
      keyframes: {
                wiggle: {
                   '0%, 100%': { transform: 'rotate(-3deg)' },
                   '50%': { transform: 'rotate(3deg)' },
                 }
                },
      fontFamily: {
        courier: ["courier", "sans-serif"],
      },
    },
  },

  plugins: [
    plugin(function ({ addUtilities, addComponents, e, config }) {
      // Add your custom styles here
    }),
  ],
};
