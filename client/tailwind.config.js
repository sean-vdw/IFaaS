module.exports = {
  content: [
    'src/components/Header.js',
    'src/components/Overview.js',
    'src/components/Contact.js',
    'src/components/Footer.js',
  ],
  theme: {
    extend: {},
  },
  plugins: [
    require('@tailwindcss/forms'),
  ],
}
