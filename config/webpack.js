const path = require('path')
const ExtractTextPlugin = require('extract-text-webpack-plugin')

const cwd = process.cwd()
const rules = {
  '%': 'define-mixin',
  $: 'mixin',
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
    require('postcss-mixins'),
    require('postcss-custom-selectors'),
    require('postcss-define-units'),
    require('postcss-if-media'),
    require('postcss-custom-media'),
    require('postcss-media-minmax'),
    require('postcss-color-scale'),
    require('postcss-brand-colors'),
    require('postcss-responsive-type'),
    require('lost'),
    require('autoprefixer'),
    require('postcss-alias-atrules')({ rules }),
  ],
  plugins: [
    new ExtractTextPlugin('style.css'),
  ],
}
