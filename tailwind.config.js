/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./dist/*.{html,js}"],
  theme: {
    extend: {
      lineHeight: {
        '0.9': '0.9',
        '50': '50px',
      },
    },
    colors: {
      'white': '#ffffff',
      'primary': '#f84848',
      'gray-333': '#333',
      'gray-444': '#444',
      'gray-555': '#555',
      'gray-3a3a3a': '#3a3a3a',
      'gray-efefef': '#efefef',
      'custo': 'red',
    },
    fontSize: {
      'fs-11': '1.1rem',
      'fs-12': '1.2rem',
      'fs-13': '1.3rem',
      'fs-14': '1.4rem',
      'fs-20': '2rem',
      'fs-21': '2.1rem',
      'fs-111': '11rem',
    },
    letterSpacing: {
      '1px': '1px',
      'n2px': '-1.8px',
      'n3px': '-3px',
    },
    width: {
      '100': '100px',
      '50': '50px',
      '860': '860px',
      '1/2': '50%',
      'full': '100%',
      '140%': '140%'
    },
    height: {
      '100': '100px',
      '50': '50px',
      '475': '475px',
      'full': '100%',
    },
    spacing: {
      '0': '0',
      '0.7': '0.7rem',
      '1rem': '1rem',
      '1': '3px',
      '1px': '1px',
      '2': '8px',
      '2.5': '10px',
      '20': '20px',
      '85': '85px',
      '15': '15px',
      '40': '40px',
      '35': '35px',
    },
    boxShadow: {
      'boxy': '-15px 0 35px rgba(0, 0, 0, 0.1), 0 -15px 35px rgba(0, 0, 0, 0.1), 0 15px 35px rgba(0, 0, 0, 0.1)',
      'pboxy': '15px 0 35px rgba(0, 0, 0, 0.1), 0 -15px 35px rgba(0, 0, 0, 0.1), 0 15px 35px rgba(0, 0, 0, 0.1)',
    },
    zIndex: {
      '1': '1',
      '2': '2',
      '3': '3',
      '4': '4',
      '5': '5',
      '6': '6',
      '7': '7',
      '8': '8',
      '9': '9',
      '10': '10',
    },
    
  },
  plugins: [],
}

