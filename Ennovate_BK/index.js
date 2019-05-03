const winston = require('winston')
const express = require('express')
const cors = require('cors')

const app = express()
app.use(cors())

// export ennovate_jwtPrivateKey=secret
// Or // set ennovate_jwtPrivateKey=secret

// export emailPass=Kokiwawa123
// Or // set emailPass=Kokiwawa123

// export EMAIL=true  // to send a Email
// Or // set EMAIL=true

// export GLOBAL=true  // to use global url
// Or // set GLOBAL=true

require('./startup/logging')()
require('./startup/routes')(app)
require('./startup/db')()
require('./startup/config')()
require('./startup/validation')()

const port = process.env.PORT || 8080
const server = app.listen(port, () =>
  winston.info(`Listening on port ${port}...`)
)

module.exports = server
