/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: "#2257FF",
          50: "#DAE3FF",
          100: "#C5D3FF",
          200: "#9CB4FF",
          300: "#7495FF",
          400: "#4B76FF",
          500: "#2257FF",
          600: "#0038E9",
          700: "#002AB1",
          800: "#001D79",
          900: "#000F41",
        },
        secondary: {
          DEFAULT: "#343434",
          50: "#ffffff",
          100: "#cdcdcd",
          200: "#e6e6e6",
          300: "#b3b3b3",
          400: "#808080",
          500: "#676767",
          600: "#4d4d4d",
          700: "#343434",
          800: "#1a1a1a",
          900: "#000000",
        },
      },

      animation: {
        spinonce: "spin 1s ease-in-out",
      },

      backgroundImage: {
        loginsplash:
          "url('https://images.unsplash.com/photo-1525547719571-a2d4ac8945e2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=764&q=80')",
      },
    },
  },
  important: true,
  darkMode: "class",
}
