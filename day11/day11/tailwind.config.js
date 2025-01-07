/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}", // Include all component files
  ],
  theme: {
    extend: {
      colors: {
        primary: "#1e293b", // Custom primary color
        secondary: "#f43f5e", // Custom secondary color
      },
    },
  },
  plugins: [],
};