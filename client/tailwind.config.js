module.exports = {
  content: [
    'src/components/Header.js',
    'src/components/Overview.js',
    'src/components/Macro.js',
    'src/components/Screener.js',
    'src/components/Hedge.js',
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
