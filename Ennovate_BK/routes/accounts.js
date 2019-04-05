const Joi = require('joi')
const bcrypt = require('bcrypt')
const _ = require('lodash')
const nodemailer = require('nodemailer')
const jwt = require('jsonwebtoken')
const winston = require('winston')
const config = require('config')
const { User, validateSignUp } = require('../models/user')
// const mongoose = require('mongoose')
const express = require('express')
const router = express.Router()

// ------------------------------------------------------------------------------------------

// Signin

router.post('/signin', async (req, res) => {
  const { error } = validateSignIn(req.body)
  if (error) return res.status(400).send({ msg: error.details[0].message })

  let user = await User.findOne({ email: req.body.email })
  if (!user) return res.status(404).send({ msg: 'UserNotFound' })

  const validPassword = await bcrypt.compare(req.body.password, user.password)
  if (!validPassword) return res.status(404).send({ msg: 'IncorrectPassword' })

  const token = user.generateAuthToken()

  if (!user.verified) {
    return res.send({ msg: 'Please verify your email', token: token })
  }
  res.send({ token: token })
})

function validateSignIn (req) {
  const schema = {
    email: Joi.string()
      .min(5)
      .max(128)
      .required()
      .email(),
    password: Joi.string()
      .min(8)
      .max(25)
      .required()
  }

  return Joi.validate(req, schema)
}

// ----------------------------------------------------------------------------------

// signUp

router.post('/signup', async (req, res) => {
  const { error } = validateSignUp(req.body)
  if (error) return res.status(400).send({ msg: error.details[0].message })

  let user = await User.findOne({ email: req.body.email })
  if (user) return res.status(404).send({ msg: 'email already registered.' })

  user = await User.findOne({ screen_name: req.body.screen_name })
  if (user) {
    return res.status(404).send({ msg: 'screen name already registered.' })
  }

  user = new User(
    _.pick(req.body, ['name', 'email', 'screen_name', 'password'])
  )
  const salt = await bcrypt.genSalt(10)
  user.password = await bcrypt.hash(user.password, salt)
  await user.save()

  const token = user.generateAuthToken()

  let transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: config.get('email'),
      pass: config.get('pass')
    },
    tls: {
      rejectUnauthorized: false
    }
  })

  let mailOptions = {
    from: config.get('email'),
    to: user.email,
    subject: 'Verify your account',
    html:
      '<h4><b>Verify your Account</b></h4>' +
      '<p>To verify your account, click the following link:</p>' +
      '<a href="' +
      config.get('Url') +
      'accounts/verify/' +
      token +
      '" > ' +
      config.get('Url') +
      'accounts/verify/' +
      token +
      '</a>' +
      '<br><br>' +
      '<p>--Ennovate Team</p>'
  }

  await transporter.sendMail(mailOptions, function (error, info) {
    if (error) {
      console.log(error)
      return res.status(500).send('Unable to send email')
    } else {
      winston.info('Email sent to: ' + user.email)
      return res
        .header('token', token)
        .send(_.pick(user, ['_id', 'screen_name', 'name', 'email', 'created_at', 'verified']))
    }
  })
})

// ----------------------------------------------------------------------------------

// verify

router.get('/verify/:token', async (req, res) => {
  const decoded = jwt.verify(req.params.token, config.get('jwtPrivateKey'))

  const user = await User.findOneAndUpdate(decoded._id,
    {
      verified: true
    }, { new: true })
  if (!user) return res.status(404).send('The user with the given ID was not found.')
  return res.status(200).send('Your Account has been verified')
})

// ----------------------------------------------------------------------------------
module.exports = router
