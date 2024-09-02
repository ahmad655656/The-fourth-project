const { keyframes } = require('@emotion/react')

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    colors:{
      'mainTextColor': '#ffa43b',
      'secondTextColor': '#fff',
      'theardTextColor': '#000',
      'shadowColor': '#444',
      'afterVideo': '#444',
    },
    screens:{
      'sm': '208px',
      'md': '768px',
      'lg': '1023px',
      'xlg': '1700px',
    },
    boxShadow:{
      shadowVideo: '2px 2px 40px 2px',
    },
    extend: {
      borderColor:{
        'BottomNavBar': 'rgba(255, 255, 255, 0.1)',
      },
      backgroundColor: {
        'mainBackground' : '#111', 
        'smallSection': 'black',
      },
      animation:{
        animatioPhoto: 'animatioPhoto  3s ease-in-out infinite 5s alternate ',
        animatioPhoto2: 'animatioPhoto2  3s ease-in-out infinite 5s alternate ',
      },
      keyframes: {
        animatioPhoto: {
          '0%' : { transform: 'translateX(0px)' },
          '100%' : { transform: 'translateX(100px)' },
        },
        animatioPhoto2: {
          '0%' : { transform: 'translateX(0px)' },
          '100%' : { transform: 'translateX(-100px)' },
        },
      },
    },
  },
  plugins: [],
}

