'use strict'

import express from 'express'
import config from '../config'
import path from 'path'

const app = express()

if (config.ENV !== 'production') {
  // Webpack for development
}

app.use(require('morgan')('dev'))

app.set('views', path.join(__dirname, '../client/views'))
app.set('view engine', 'jade')

module.exports = app
