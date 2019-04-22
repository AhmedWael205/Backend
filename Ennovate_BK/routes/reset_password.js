const { User } = require('../models/user')
const config = require('config')
const Joi = require('joi')
const jwt = require('jsonwebtoken')
const bcrypt = require('bcryptjs')
const express = require('express')
const router = express.Router()

router.post('/', async (req, res) => {
  const token = req.query.token
  if (!token) return res.status(401).send({ msg: 'No token provided.' })

  var verifyOptions = { expiresIn: '1h' }
  const decoded = jwt.verify(token, config.get('jwtPrivateKey'), verifyOptions)

  const { error } = validatePassword(req.body)
  if (error) return res.status(400).send({ msg: error.details[0].message })

  const salt = await bcrypt.genSalt(10)
  const password = await bcrypt.hash(req.body.password, salt)

  const user = await User.findOneAndUpdate({ _id: decoded._id },
    {
      password: password
    }, { new: true })

  if (!user) return res.status(404).send('The user with the given ID was not found.')
  return res.status(200).send({ msg: 'Your password has changed', token: token, user: user })
})

function validatePassword (req) {
  const schema = {
    password: Joi.string()
      .min(8)
      .max(25)
      .required()
  }
  return Joi.validate(req, schema)
}

module.exports = router
