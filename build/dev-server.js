const express       = require('express')
const webpack       = require('webpack')
const devMiddleware = require('webpack-dev-middleware')
const hotMiddleware = require('webpack-hot-middleware')
const config        = require('./webpack.dev.config')
const compiler      = webpack(config)

let app = express()
app.use(devMiddleware(compiler, {
  publicPath: config.output.publicPath,
  noInfo: true,
  stats: {
    colors: true
  }
}))
app.use(hotMiddleware(compiler))

app.listen(9000, function (err) {
  if (err) {
    console.log(err)
    return
  }
  console.log('listening at http://localhost:9000')
})