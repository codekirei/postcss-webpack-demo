const path = require('path')
const ExtractTextPlugin = require('extract-text-webpack-plugin')

// postcss plugins
//----------------------------------------------------------
const autoprefixer = require('autoprefixer')
const customMedia = require('postcss-custom-media')
const ifMedia = require('postcss-if-media')
const mediaMinmax = require('postcss-media-minmax')
const colorScale = require('postcss-color-scale')
//----------------------------------------------------------

const cwd = process.cwd()

module.exports = {
  entry: path.resolve(cwd, 'src', 'app'),
  output: {
    path: path.join(cwd, 'dist'),
    filename: 'app.js',
  },
  module: {
    loaders: [
      {
        test: /\.css$/,
        loader: ExtractTextPlugin.extract([
          'css',
          'postcss',
        ]),
      },
    ],
  },
  postcss: [
    ifMedia,
    customMedia,
    mediaMinmax,
    colorScale,
    autoprefixer,
  ],
  plugins: [
    new ExtractTextPlugin('style.css'),
  ],
}
