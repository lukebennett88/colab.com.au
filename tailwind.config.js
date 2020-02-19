const tw = require('tailwindcss/defaultTheme');

module.exports = {
  theme: {
    extend: {
      colors: {
        'transparent-black': 'hsla(0, 0%, 0%, 0.5)',
        fuschia: '#CA0088',
        gray: {
          ...tw.colors.gray,
          '600': '#707070',
          '800': '#40383D',
        },
      },
      fontFamily: {
        display: ['True North', ...tw.fontFamily.sans],
        sans: ['Poppins', ...tw.fontFamily.sans],
      },
      minHeight: {
        '48rem': '48rem',
      },
      minWidth: {
        '125pc': '125%',
      },
      maxWidth: {
        '1920': '1920px',
      },
      spacing: {
        '72': '18rem',
        '80': '20rem',
      },
    },
  },
  variants: {
    borderWidth: ['responsive', 'first'],
    margin: ['responsive', 'first'],
  },
  plugins: [],
};
