const path              = require('path')
const webpack           = require('webpack')
const autoprefixer      = require('autoprefixer')
const ExtractTextPlugin = require('extract-text-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const generateCssFiles  = new ExtractTextPlugin("css/[name].[id].css", {allChunks: true})
const generateHtml      = new HtmlWebpackPlugin({
  filename: 'index.html',
  template: path.resolve(__dirname, '../src/index.html'),
  inject: true
})

module.exports = {
  entry: {
    app: path.resolve(__dirname, '../src/index.js')
  },
  output: {
    path: path.resolve(__dirname, '../dist'),
    publicPath: 'dist/',
    filename: '[name].[hash:6].js',
    chunkFilename: '[id].[chunkhash].js'
  },
  module: {
    loaders: [
    {test: /\.vue$/, loader: 'vue'},
    {test: /\.json$/, loader: 'json'},
    {test: /\.js$/, loader: 'babel', exclude: /node_modules/},
    {test: /\.css$/, loader: ExtractTextPlugin.extract('style', 'css!postcss')},
    {test: /\.scss$/, loader: ExtractTextPlugin.extract('style', 'css!postcss!sass')},
    {test: /\.(eot|ttf|woff|woff2|svg)(\?\S*)?$/, loader: 'file?name=fonts/[name].[ext]'},
    {test: /\.(png|jpe?g|gif)$/, loader: 'url?limit=10000&name=images/[name].[ext]'}
    ]
  },
  plugins: [ generateHtml, generateCssFiles ],
  resolve: {
    root: path.resolve('node_modules'),
    extensions: ['', '.js', '.vue'],
    alias: {
      'assets-images': path.resolve(__dirname, '../src/assets/images')
    }
  },
  babel: {presets: ['es2015', 'stage-1']},
  vue: {
    loaders: {
      js: 'babel',
      css: ExtractTextPlugin.extract('vue-style-loader', 'css'),
      scss: ExtractTextPlugin.extract('vue-style-loader', 'css!sass')
    },
    autoprefixer: {browsers: ['last 2 versions']}
  },
  postcss: function () {
    return [autoprefixer({
      remove: false,
      browsers: ['ie >= 9', '> 1% in CN']
    })]
  },
  devtool: 'source-map'
}