const express = require('express')
const logger = require('morgan')
require('dotenv').config()
require('./db/mongoose')

const app = express()

app.use(express.json())
app.use(logger('dev'))

app.get('', (req, res, next) => {
  res.statusCode = 200
  res.setHeader('Content-Type', 'text/html')
  res.end(`<html><body><h1>Order API</h1></body></html>`)
})

const port = process.env.PORT || '3000'
app.listen(port, () => {
  console.log('Server listening on port ' + port)
})
