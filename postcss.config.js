const webpack = require('webpack')
const autoprefixer = require('autoprefixer')
const postCSSImport = require('postcss-import')
const postCSSNested = require('postcss-nested')
const postCssCssVariables = require('postcss-css-variables')()
const postCSSInlineSVG = require('postcss-inline-svg')()
const cssnano = require('cssnano')

const postCSSAutoprefixer = autoprefixer()
const postCssImport = postCSSImport({
  addDependencyTo: webpack,
})

const colorFunction = require('postcss-color-function')

module.exports = {
  plugins: [
    postCssImport,
    postCSSAutoprefixer,
    postCSSNested,
    postCssCssVariables,
    postCSSInlineSVG,
    colorFunction,
    cssnano,
  ],
}