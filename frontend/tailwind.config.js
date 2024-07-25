module.exports = {
  corePlugins: {
    preflight: false
  },
  darkMode: 'class',
  // Add here class to expose globally
  safelist: [],
  content: ['./src/components/**/*.{js,vue,ts}', './src/layouts/**/*.vue', './src/pages/**/*.vue', './src/plugins/**/*.{js,ts}'],
  theme: {
    screens: {
      md: { max: '767px' },
      sm: { max: '640px' },
      mobile: { max: '480px' },
      laptop: { max: '1200px' }
    },
    container: {
      center: true,
      screens: {
        lg: '75em',
        xl: '75em',
        '2xl': '75em'
      }
    },
    extend: {
      colors: {
      },
      fontFamily: {
      }
    }
  },
  plugins: []
};
