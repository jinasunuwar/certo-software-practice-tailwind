/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*{html,js}"
  ],
  theme: {
    fontFamily: {
      'sans' : ['Inter', 'sans-serif']
    },
    colors: {
      'primary-text-blue' : '#02033B',
      'white' : '#ffffff',
      'primary-blue' : '#4335DE',
      'primary-dark-blue' : '#291DB1',
      'sky-blue' : '#F3F8FF',
      'gradient-sky-blue' : '#E7EFFA',
      'yellow' : '#FFC247',
      'gradient-light-yellow' : '#F7C95F',
      'gradient-dark-yellow' : '#FDB235',
      'dark-yellow' : '#F4A300',
      'gradient-light-blue' : '#4B48E5',
      'gradient-dark-blue' : '#2925CC',
    },
    container: {
      padding: {
        lg : '1056px'
      }
    },
    extend: {
      fontSize : {
        '34' : '34px',
        '56' : '56px'
      },
      spacing: {
        '50' : '52px',
        '72.0' : '72px',
        'topbottom' : '84px',
        'leftright' : '132px',
        '24' : '100px',
        '28' : '120px',
        '86' : '596px',
        '90' : '720px',
        '96' : '820px',
        'm' : '400px',
        '305' : '305px'
      },
      backgroundImage : {
        'heroBanner' : "url('/src/images/hero-banner.png')",
        'heroTriangle' : "url('/src/images/hero-triangle-image.png')",
        'newsletterBG' : "url('/src/images/letter-logo.png')"
      }, 
      boxShadow : {
        'rating' : '2px 12px 20px 0px rgba(0, 0, 0, 0.10)',
        'feature' : '12px 12px 20px 0px rgba(0, 0, 0, 0.10)'
      }
    },
  },
  plugins: [],
}

