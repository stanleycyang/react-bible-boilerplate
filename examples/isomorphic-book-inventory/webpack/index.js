'use strict'

const devConfig = require('./dev.config')

exports.devConfig = devConfig
exports.compiler = require('webpack')(devConfig)
