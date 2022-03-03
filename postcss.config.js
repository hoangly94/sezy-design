module.exports = {
  plugins: {
    'postcss-flexbugs-fixes': {},
    'postcss-preset-env': {
      autoprefixer: {
        flexbox: 'no-2009',
      },
      stage: 3,
      features: {
        'custom-properties': false,
      },
    },
    'autoprefixer': {},
    'postcss-import': {
      addDependencyTo: require('webpack'),
    },
    'postcss-nested': {},
    'cssnano': {},
    'postcss-color-function': {},
    'postcss-custom-media': {
      importFrom: 'src/css/viewports.css'
    }
  },
}