/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./src/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      'black':'#000000',
      'white': '#ffffff',
      'orange': '#ea580c',
      'orange-clair': '#CB6E3C',
      'blur-bg': '#0C0C0CBA',
      'yellow': '#D8D232',
      'red': '#EF1111',
      'gray': '#302424',
      'recent-bg': '#F1EDE4',
      
    },
    extend: {
      fontFamily:{
          roboto_italic: ["Roboto", "sans-serif"],
          roboto: ["Roboto", "sans-serif"],
          satisfy: ["Satisfy", "cursive"],
          varela_round: ["Varela Round", "sans-serif"]
      },
      backgroundImage: {
        'profile-1': "url('/src/Images/profile_img.png')",
        'profile-2': "url('/src/Images/profile_img1.png')",
      },
      animation: {
        'ping': 'ping 1s cubic-bezier(0, 0, 0.2, 1) 2',
      },
      keyframes: {
        ping: {
          '75%, 100%': { transform: 'scale(1)', opacity:'0' },
        }
      }

    },
  },
  plugins: [
      
  ],
  
}
