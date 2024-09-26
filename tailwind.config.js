/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      screens: {
        "mobile": "320px",
        "mobileM": "375px",
        "mobileL": "425px",
        "tablet": "768px",
        "laptop": "1024",
        "laptopL": "1440px",
        "4k": "2560px",
      },
    },
  },
  plugins: [],
};
