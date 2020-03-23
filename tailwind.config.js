const defaultTheme = require('tailwindcss/defaultTheme');
const tailwindFilters = require('tailwindcss-filters');

module.exports = {
  theme: {
    backdropFilter: {
      blur: `blur(${defaultTheme.spacing[2]})`,
    },
    extend: {
      colors: {
        'transparent-black': 'hsla(0, 0%, 0%, 0.2)',
        fuschia: '#CA0088',
        gray: {
          ...defaultTheme.colors.gray,
          '600': '#707070',
          '800': '#40383D',
        },
      },
      fontFamily: {
        display: ['True North', ...defaultTheme.fontFamily.sans],
        sans: ['Poppins', ...defaultTheme.fontFamily.sans],
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
  plugins: [
    // Add Tailwind Filter plugin
    tailwindFilters,
  ],
};
