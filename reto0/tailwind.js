const tailwindcss = require("tailwindcss");

module.exports = {
  theme: {
    extend: {},
  },
  variants: {},
  plugins: [
    tailwindcss('./tailwind.js'),
    require('autoprefixer')
  ],
}
