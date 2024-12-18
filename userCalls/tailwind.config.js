/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './groups.html', './calls.html', './status.html'],
  theme: {
    extend: {
      fontSize: {
        "last":'12px',
        'uName':'16px',
        'msg': '13px',
      },
    },
  },
  plugins: [
    require('tailwind-scrollbar'),
    require('tailwind-scrollbar-hide'),
  ],
}

