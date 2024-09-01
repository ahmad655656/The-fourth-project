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
    animation:{
      'animatioPhoto': 'a 1s 1s easy-in infinit alternate forwords',
    },
    boxShadow:{
      shadowVideo: '2px 2px 40px 2px'
    },
    extend: {
      borderColor:{
        'BottomNavBar': 'rgba(255, 255, 255, 0.1)',
      },
      backgroundColor: {
        'mainBackground' : '#111', 
        'smallSection': 'black',
      },
    },
  },
  plugins: [],
}

