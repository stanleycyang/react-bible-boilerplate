'use strict'

import express from 'express'
import config from '../config'
import path from 'path'
import home from './routes'

const app = express()

// Webpack configurations
const webpackServer = require('../webpack')
const compiler = webpackServer.compiler
const devConfig = webpackServer.devConfig

// Only use outside of production
if (config.ENV !== 'production') {
  app.use(require('webpack-dev-middleware')(compiler, {
    noInfo: true,
    publicPath: devConfig.output.publicPath
  }))

  app.use(require('webpack-hot-middleware')(compiler))
}

// Static files
app.use(express.static(path.join(__dirname, '../static'), {
  maxAge: 86400000
}))

// Logging
app.use(require('morgan')('dev'))

// Use Jade
app.set('views', path.join(__dirname, '../client/views'))
app.set('view engine', 'jade')

// Set up route
app.use('/', home)

// Export App
module.exports = app
