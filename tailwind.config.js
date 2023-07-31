/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      fontFamily: {
        'poppins': ['Poppins', 'sans-serif']
      },
      colors:{
        'primary':'rgba(20, 0, 250, 0.6)'
      },
      backgroundColor:{
        'secondary':'rgb(245 245 245);',
        'contact_bg':'#c7c7c7',
        'overlay': 'rgb(1 1 1 / 73%);'
      },
      boxShadow:{
        'boxShadow':'rgba(0, 0, 0, 0.24) 0px 3px 8px;'
      },
      transitionProperty:{
        'property':'all',
      },
      transitionDuration:{
        'duration':'.3s',
      }
    },
  },
  plugins: [],
}
