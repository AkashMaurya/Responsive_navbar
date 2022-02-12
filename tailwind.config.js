module.exports = {
  plugins: {
    tailwindcss: {},
    autoprefixer: {},
  },
  content: [],
  theme: {
    extend: {},
  },
  plugins: [],
  purge: [
    './public/**/*.html',
     './public/**/*.js',
  ],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {},
  },
}
