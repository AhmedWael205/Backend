const Joi = require('joi')
const bcrypt = require('bcryptjs')
const _ = require('lodash')
const nodemailer = require('nodemailer')
const jwt = require('jsonwebtoken')
const winston = require('winston')
const multer = require('multer')
const path = require('path')
const config = require('config')
const { User, validateSignUp } = require('../models/user')
const { Nova } = require('../models/nova')
const mongoose = require('mongoose')
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
    return res.send({ msg: 'Please verify your email', token: token, user })
  }
  res.send({ token: token, user })
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
  // await user.save()

  const token = user.generateAuthToken()

  const email = process.env.EMAIL || 'false'

  if (email === 'true') {
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

    const global = process.env.GLOBAL || 'false'
    var url = config.get('Url')

    if (global === 'true') {
      url = config.get('globalUrl')
    }
    let mailOptions = {
      from: config.get('email'),
      to: user.email,
      subject: 'Verify your account',
      html:
        '<h4><b>Verify your Account</b></h4>' +
        '<p>To verify your account, click the following link:</p>' +
        '<a href="' +
        url +
        'accounts/verify/' +
        token +
        '" > ' +
        url +
        'accounts/verify/' +
        token +
        '</a>' +
        '<br><br>' +
        '<p>--Ennovate Team</p>'
    }

    await transporter.sendMail(mailOptions, async function (error, info) {
      if (error) {
        console.log(error)
        return res.status(500).send({ msg: 'Unable to send email' })
      } else {
        winston.info('Email sent to: ' + user.email)
        await user.save()
        return res
          // .header('token', token)
          // .send(_.pick(user, ['_id', 'screen_name', 'name', 'email', 'created_at', 'verified']))
          .send({ token: token, user })
      }
    })
  } else {
    await user.save()
    return res
      // .header('token', token)
      .send({ token: token, user })
  }
})

// ----------------------------------------------------------------------------------

// verify

router.get('/verify/:token', async (req, res) => {
  const decoded = jwt.verify(req.params.token, config.get('jwtPrivateKey'))

  const user = await User.findOneAndUpdate({ _id: decoded._id },
    {
      verified: true
    }, { new: true })
  if (!user) return res.status(404).send('The user with the given ID was not found.')
  return res.status(200).send('Your Account has been verified')
})

// ----------------------------------------------------------------------------------

// Edit Accounts Settings

router.post('/settings', async (req, res) => {
  const { error } = validateSettings(req.body)
  if (error) return res.status(400).send({ msg: error.details[0].message })

  const token = req.headers['token']
  if (!token) return res.status(401).send({ msg: 'No token provided.' })

  const decoded = jwt.verify(token, config.get('jwtPrivateKey'))

  const user = await User.findOne({ _id: decoded._id })
  if (!user) return res.status(404).send('The user with the given ID was not found.')

  var screenName = req.body.screen_name
  if (screenName) {
    var user2 = await User.findOne({ screen_name: screenName })
    if (user2) return res.status(404).send('screen name is already used')
  } else {
    screenName = user.screen_name
  }
  const name = req.body.name || user.name
  const location = req.body.location || user.location
  const bio = req.body.bio || user.bio

  const user3 = await User.findOneAndUpdate({ _id: decoded._id },
    { $set:
      {
        screen_name: screenName,
        name: name,
        location: location,
        bio: bio }
    }, { new: true })

  await Nova.updateMany({ user: decoded._id },
    { $set:
      {
        user_screen_name: screenName,
        user_name: name }
    }, { new: true })

  return res.send(_.pick(user3, ['_id', 'screen_name', 'name', 'location', 'bio']))
})

function validateSettings (user) {
  const schema = {
    name: Joi.string()
      .min(3)
      .max(15),
    screen_name: Joi.string()
      .min(3)
      .max(15)
      .token(),
    location: Joi.string()
      .max(100),
    bio: Joi.string()
      .max(255)
  }

  return Joi.validate(user, schema)
}

// ----------------------------------------------------------------------------------

// Accounts Settings

router.get('/settings', async (req, res) => {
  const token = req.headers['token']
  if (!token) return res.status(401).send({ msg: 'No token provided.' })

  const decoded = jwt.verify(token, config.get('jwtPrivateKey'))
  var user = await User.findOne({ _id: decoded._id })
  if (!user) return res.status(404).send('The user with the given ID was not found.')

  return res.send(_.pick(user, ['_id', 'screen_name', 'name', 'location', 'bio']))
})

// ----------------------------------------------------------------------------------

// Update Profile Image

// Set The Storage Engine
const storage = multer.diskStorage({
  destination: './public/uploads/',
  filename: function (req, file, cb) {
    cb(null, file.fieldname + '-' + Date.now() + path.extname(file.originalname))
  }
})

// Init Upload
const upload = multer({
  storage: storage,
  limits: { fileSize: 5 * 1024 * 1024 }, // 5 MB
  fileFilter: function (req, file, cb) {
    checkFileType(file, cb)
  }
})

// Check File Type
function checkFileType (file, cb) {
// Allowed ext
  const filetypes = /jpeg|jpg|png|gif/
  // Check ext
  const extname = filetypes.test(path.extname(file.originalname).toLowerCase())
  // Check mime
  const mimetype = filetypes.test(file.mimetype)

  if (mimetype && extname) {
    return cb(null, true)
  } else {
    cb(null, false)
  }
}

router.post('/update_profile_image', upload.single('profileImage'), async (req, res) => {
  const token = req.headers['token']
  if (!token) return res.status(401).send({ msg: 'No token provided.' })

  const decoded = jwt.verify(token, config.get('jwtPrivateKey'))
  const imgUrl = (config.get('Url') + 'public/uploads/' + req.file.filename) || null

  var user = await User.findOneAndUpdate({ _id: decoded._id }, {
    $set:
    { profile_image_url: imgUrl,
      default_profile_image: false }
  }, { new: true })
  if (!user) return res.status(404).send('The user with the given ID was not found.')

  return res.send(user)
})

// ----------------------------------------------------------------------------------
module.exports = router
