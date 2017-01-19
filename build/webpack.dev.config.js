const path              = require('path')
const webpack           = require('webpack')
const ExtractTextPlugin = require('extract-text-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const config            = require('./webpack.config')
const hotMiddlewareScri = 'webpack-hot-middleware/client?reload=true'

const generateCssFiles  = new ExtractTextPlugin("css/[name].[id].css", {allChunks: true})
const generateHtml      = new HtmlWebpackPlugin({
  filename: 'dist/index.html',
  template: path.resolve(__dirname, '../src/index.html'),
  inject: true
})

config.output.publicPath = '/'

const extras = [ hotMiddlewareScri ]
Object.keys(config.entry).forEach(function (key) {
  config.entry[key] = extras.concat(config.entry[key])
})

config.plugins = [
  new webpack.optimize.OccurenceOrderPlugin(),
  new webpack.HotModuleReplacementPlugin(),
  new webpack.NoErrorsPlugin(),
  generateHtml,
  generateCssFiles
]

module.exports = config