const plugin = require('tailwindcss/plugin');

module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#8b5cf6',
        secondary: '#4f46e5',
        background: '#F6F7FA',
        darkBlue: '#2563eb',
        purple: '#7c3aed',
        muted: '#7B7B9A',
      },
      backgroundImage: {
        'gradient-text-1': 'linear-gradient(90deg, #00F0FF, #9038FF, #5200FF)',
        'gradient-text-2': 'linear-gradient(90deg, #F46B42, #A259FF, #1ABCFE)',
      },
      borderRadius: {
        'full': '9999px',
      },
    },
  },
  plugins: [
    plugin(function({ addUtilities }) {
      addUtilities({
        '.gradient-text-1': {
          'background': 'linear-gradient(90deg, #00F0FF, #9038FF, #5200FF)',
          '-webkit-background-clip': 'text',
          'color': 'transparent',
        },
        '.gradient-text-2': {
          'background': 'linear-gradient(90deg, #8F00FF, #000AFF, #7200CC, #560099)',
          '-webkit-background-clip': 'text',
          'color': 'transparent',
        },
        '.btn-gradient-border': {
          'height': '47px',
          'background': 'linear-gradient(#000, #000), linear-gradient(60deg, #F46B42, #A259FF, #1ABCFE)',
          'color': 'white',
          'border': '1px solid transparent',
          'border-radius': '6px',
          'display': 'inline-block',
          'font-size': '20px',
          'background-origin': 'border-box',
          'background-clip': 'content-box, border-box',
        },
        '.btn-gradient-fill': {
          'height': '47px',
          'background': 'linear-gradient(90deg, #9038FF, #5D20AA, #5200FF)',
          'color': 'white',
          'border': '1px solid transparent',
          'border-radius': '6px',
          'display': 'inline-block',
          'font-size': '20px',
          'background-origin': 'border-box',
          'background-clip': 'content-box, border-box'
        },
      });
    }),
  ],
};
