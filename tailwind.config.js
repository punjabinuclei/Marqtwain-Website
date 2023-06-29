/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'Orange': '#FF6B28',
        'Beige': '#F7F1DA',
        'Gray': ' #4B5780',
        'BG': '#212129',
        'Theme-White': '#FAFAFA',
        'Border': '#C8C8C8;',
        'BG-2': '#191921',
        'Theme-Blue': '#7e98fd',
        'Orange-2': '#FF602E',
        'Gray-2': '#3a495d',
        'Theme-Blue-2': '#4F4FC8',
        'Theme-Blue-3':'#0F2133',
        'Gray-3':'rgba(255, 255, 255, 0.60)',
        'Gray-4':'#646464',
        'Black-2':'#1D1F25'

      },
    },
  },
  plugins: [
  ],
}
