/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./src/**/*.{html,js}"],
    theme: {
      extend: {
        colors: {
            customPlaceholder: '#FF5733', // Add your custom color
          },
      },
    },
    plugins: [],
  }