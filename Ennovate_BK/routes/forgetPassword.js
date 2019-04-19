const { User } = require('../models/user')
const config = require('config')
const nodemailer = require('nodemailer')
const winston = require('winston')
const express = require('express')
const router = express.Router()

router.get('/', async (req, res) => {
  let user = await User.findOne({ email: req.body.email })
  if (!user) return res.status(404).send('UserNotFound')

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

  let global = process.env.GLOBAL || 'false'
  var url = config.get('FrontUrl')

  if (global === 'true') {
    url = config.get('globalFrontUrl')
  }

  let mailOptions = {
    from: config.get('email'),
    to: user.email,
    subject: 'Reset your account password',
    html:
      '<h4><b>Reset Password</b></h4>' +
      '<p>To reset your password, complete this form:</p>' +
      '<a href="' +
      url +
      'reset_password/' +
      token +
      '" > ' +
      url +
      'reset_password/' +
      token +
      '</a>' +
      '<br><br>' +
      '<p>--Ennovate Team</p>'
  }

  await transporter.sendMail(mailOptions, function (error, info) {
    if (error) {
      return res.status(500).send('Unable to send email')
    } else {
      winston.info('Email sent to: ' + user.email)
      return res.json({
        msg: 'Check your mail to reset your password.'
      })
    }
  })
})

module.exports = router
