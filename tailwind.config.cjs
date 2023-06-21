module.exports = {
  content: ['./src/routes/**/*.{svelte,js,ts}'],
  theme: {
    extend: {
      fontFamily: {
        'myFont': ['', 'sans-serif']
      }
    }
  },
  plugins: [require('daisyui')],
  daisyui: {
    themes: [],
  },
};
