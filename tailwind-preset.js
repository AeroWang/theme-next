// const colors = require('tailwindcss/colors')
/** @type {import('tailwindcss').Config} */
module.exports = {
  theme: {
    extend: {
      colors: {
        white: {
          DEFAULT: '#fff',
          85: 'rgba(255,255,255,.85)',
          65: 'rgba(255,255,255,.65)',
          45: 'rgba(255,255,255,.45)',
          25: 'rgba(255,255,255,.25)',
          15: 'rgba(255,255,255,.15)',
          6: 'rgba(255,255,255,.06)',
          4: 'rgba(255,255,255,.04)'
        },
        black: {
          DEFAULT: '#000',
          85: 'rgba(0,0,0,.85)',
          65: 'rgba(0,0,0,.65)',
          45: 'rgba(0,0,0,.45)',
          25: 'rgba(0,0,0,.25)',
          15: 'rgba(0,0,0,.15)',
          6: 'rgba(0,0,0,.06)',
          4: 'rgba(0,0,0,.04)'
        },
        gray: {
          1: '#ffffff',
          2: '#fafafa',
          3: '#f5f5f5',
          4: '#f0f0f0',
          5: '#d9d9d9',
          6: '#bfbfbf',
          7: '#8c8c8c',
          8: '#595959',
          9: '#434343',
          10: '#262626',
          11: '#1f1f1f',
          12: '#181818',
          13: '#141414',
          14: '#000000'
        }
      },
      height: {
        13: '3.125rem'
      },
      padding: {
        13: '3.125rem'
      },
      zIndex: {
        60: '60',
        70: '70',
        80: '80',
        90: '90',
        100: '100'
      }
    }
  }
}
