/** @type {import('tailwindcss').Config} */

export default {
  content: [    
  "./index.html",
  "./src/**/*.{js,jsx,ts,tsx}"
],
  theme: {
    extend: {
      backgroundImage: {
        "back": 'url("/src/assets/background.mp4")'
      },
    },
    colors: {
      'primary': '#207673',
    },
  },
  variants: {
    extend: {
      backgroundColor: ["responsive", "hover", "focus", "active", "group-hover", "group-focus"],
    },
  },
  plugins: [],
}