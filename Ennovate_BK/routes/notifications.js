const jwt = require('jsonwebtoken')
const { User } = require('../models/user')
const config = require('config')
const express = require('express')
const router = express.Router()

// ------------------------------------------------------------------------------------------

router.post('/create', async (req, res) => {
  const token = req.headers['token']
  if (!token) return res.status(401).send({ msg: 'No token provided.' })

  const decoded = jwt.verify(token, config.get('jwtPrivateKey'))

  var user = await User.findOne({ _id: decoded._id })
  if (!user) return res.status(404).send({ msg: 'The user with the given ID was not found.' })
  return res.send(user.notification_object)
})

// ------------------------------------------------------------------------------------------
module.exports = router
