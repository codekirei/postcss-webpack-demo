const path = require('path')
const ExtractTextPlugin = require('extract-text-webpack-plugin')

const cwd = process.cwd()
const rules = {
  '%': 'define-mixin',
  $: 'mixin',
  breakpoint: 'custom-media',
}

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
  postcss: webpack => [
    require('postcss-import')({ addDependencyTo: webpack }),
    require('postcss-alias-atrules')({ rules }),
    require('postcss-mixins'),
    require('postcss-simple-vars'),
    require('postcss-if-media'),
    require('postcss-custom-media'),
    require('postcss-media-minmax'),
    require('postcss-custom-selectors'),
    require('postcss-nested'),
    require('postcss-define-units'),
    require('postcss-brand-colors'),
    require('postcss-responsive-type'),
    require('lost'),
    require('postcss-calc'),
    require('postcss-size'),
    require('postcss-round-subpixels'),
    require('autoprefixer'),
    require('postcss-discard-empty'),
  ],
  plugins: [
    new ExtractTextPlugin('style.css'),
  ],
}
