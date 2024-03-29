const jwt = require('jsonwebtoken')
const config = require('config')

module.exports = function (req, res, next) {
  const token = req.header('token')
  if (!token) return res.status(401).send('Access denied. No token provided.')

  try {
    var verifyOptions = { expiresIn: '1h' }
    const decoded = jwt.verify(token, config.get('jwtPrivateKey'), verifyOptions)
    req.user = decoded
    next()
  } catch (ex) {
    res.status(400).send('Invalid token')
  }
}
