const winston = require('winston')
const express = require('express')
const cors = require('cors')

const app = express()
app.use(cors())

// export ennovate_jwtPrivateKey=secret
// Or // set ennovate_jwtPrivateKey=secret

// export emailPass=Kokiwawa123
// Or // set emailPass=Kokiwawa123

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
