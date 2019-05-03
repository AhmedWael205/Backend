const Joi = require('joi')
const jwt = require('jsonwebtoken')
const { User } = require('../models/user')
const { Following } = require('../models/following')
const multer = require('multer')
const path = require('path')
const config = require('config')
const mongoose = require('mongoose')
const { Nova } = require('../models/nova')
const express = require('express')
const router = express.Router()

// ------------------------------------------------------------------------------------------

// Home Timeline

router.get('/home_timeline', async (req, res) => {
  const token = req.headers['token']
  if (!token) return res.status(401).send({ msg: 'No token provided.' })
  const count = req.body.count || 10000000000
  const excludeReplies = req.body.exclude_replies || true

  // var verifyOptions = { expiresIn: '1h' }
  // const decoded = jwt.verify(token, config.get('jwtPrivateKey'), verifyOptions)
  const decoded = jwt.verify(token, config.get('jwtPrivateKey'))

  // to do make it find many and use a for loop

  const following = await Following.find({ sourceID: decoded._id })
  const friendIDs = []

  for (var friend of following) friendIDs.push(new mongoose.Types.ObjectId(friend.friendID))

  if (following) {
    if (excludeReplies === 'false') {
      let novas = await Nova
        .find({ $or: [ { user: decoded._id }, { user: { $in: friendIDs } } ] })
        .sort({ _id: -1 })
        .limit(count)
      return res.send(novas)
    } else {
      let novas = await Nova
        .find({ $and: [
          { $or: [ { user: decoded._id }, { user: { $in: friendIDs } } ] },
          { in_reply_to_status_id: null } ] })
        .sort({ _id: -1 })
        .limit(count)
      return res.send(novas)
    }
  } else {
    if (excludeReplies === 'false') {
      let novas = await Nova
        .find({ user: decoded._id })
        .sort({ _id: -1 })
        .limit(count)
      return res.send(novas)
    } else {
      let novas = await Nova
        .find({ $and: [ { user: decoded._id }, { in_reply_to_status_id: null } ] })
        .sort({ _id: -1 })
        .limit(count)
      return res.send(novas)
    }
  }
})

// ------------------------------------------------------------------------------------------

// update Nova V2 (Uploading the Image to the backend)

// Set The Storage Engine
const storage = multer.diskStorage({
  destination: './public/uploads/novaImages',
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

router.post('/v2/update', upload.single('novaImage'), async (req, res) => {
  const { error } = validateNova(req.body)
  if (error) return res.status(400).send({ msg: error.details[0].message })

  const token = req.headers['token']
  if (!token) return res.status(401).send({ msg: 'No token provided.' })

  // var verifyOptions = { expiresIn: '1h' }
  // const decoded = jwt.verify(token, config.get('jwtPrivateKey'), verifyOptions)
  const decoded = jwt.verify(token, config.get('jwtPrivateKey'))

  const user = await User.findOne({ _id: decoded._id })
  if (!user) return res.status(404).send({ msg: 'The user with the given ID was not found.' })

  var inreply = null
  if (req.body.in_reply_to_status_id) {
    inreply = await Nova.findOne({ _id: req.body.in_reply_to_status_id })
    if (!inreply) return res.status(404).send({ msg: 'The Nova with the given ID was not found' })
  }

  var inreplyUserID = null
  var inreplyNovaID = null
  var inreplyScreenName = null

  if (inreply) {
    inreplyNovaID = inreply._id
    inreplyUserID = inreply.user._id
    inreplyScreenName = inreply.user.screen_name
  }

  let global = process.env.GLOBAL || 'false'
  var url = config.get('Url')

  if (global === 'true') {
    url = config.get('globalUrl')
  }

  const imgUrl = (url + 'public/uploads/novaImages/' + req.file.filename) || null
  const imgSize = req.file.size || null
  const imgType = path.extname(req.file.originalname) || null

  let nova = new Nova({
    text: req.body.text,
    in_reply_to_status_id: inreplyNovaID,
    in_reply_to_user_id: inreplyUserID,
    in_reply_to_screen_name: inreplyScreenName,
    user: user,
    user_screen_name: user.screen_name,
    user_name: user.name,
    // this is to create a nova then it can't have been renovaed before or favorited
    replied_novas_IDs: [],
    favorited: false,
    renovaed: false,
    entitiesObject: {
      media: {
        type: imgType,
        size: imgSize,
        url: imgUrl
      }
    }
  })

  if (inreply) {
    Nova.inreply.update({
      $inc: { reply_count: 1 }
    })
  }
  await nova.save()

  await User.update({ _id: decoded._id },
    { '$push': { 'novas_IDs': nova._id },
      $inc: { novas_count: 1 } }, { new: true }
  )

  res.send(nova)

  // replied_novas_IDs el mafrood ageeb kol el marat ely el ID bta3 el nova de fel in_reply_to_status_id

  /*
let repliednovasIDs = await Nova
      .find({in_reply_to_status_id:nova._id})
      .sort({ _id: 1 })
      //.limit(count)

*/
})

function validateNova (Nova) {
  const schema = {
    text: Joi.string()
      .min(1)
      .max(256)
      .required()
  }
  return Joi.validate(Nova, schema)
}

// ------------------------------------------------------------------------------------------

// update Nova (Uploading the Image url only)

router.post('/update', async (req, res) => {
  const { error } = validateNovaV2(req.body)
  if (error) return res.status(400).send({ msg: error.details[0].message })

  const token = req.headers['token']
  if (!token) return res.status(401).send({ msg: 'No token provided.' })

  // var verifyOptions = { expiresIn: '1h' }
  // const decoded = jwt.verify(token, config.get('jwtPrivateKey'), verifyOptions)
  const decoded = jwt.verify(token, config.get('jwtPrivateKey'))

  const user = await User.findOne({ _id: decoded._id })
  if (!user) return res.status(404).send({ msg: 'The user with the given ID was not found.' })

  var inreply = null
  if (req.body.in_reply_to_status_id) {
    inreply = await Nova.findOne({ _id: req.body.in_reply_to_status_id })
    if (!inreply) return res.status(404).send({ msg: 'The Nova with the given ID was not found' })
  }

  var inreplyUserID = null
  var inreplyNovaID = null
  var inreplyScreenName = null

  if (inreply) {
    inreplyNovaID = inreply._id
    inreplyUserID = inreply.user._id
    inreplyScreenName = inreply.user.screen_name
  }

  // let global = process.env.GLOBAL || 'false'
  // var url = config.get('Url')

  // if (global === 'true') {
  //   url = config.get('globalUrl')
  // }

  const imgUrl = req.body.imgUrl || null
  const imgSize = req.body.imgSize || null
  const imgType = req.body.imgType || null

  let nova = new Nova({
    text: req.body.text,
    in_reply_to_status_id: inreplyNovaID,
    in_reply_to_user_id: inreplyUserID,
    in_reply_to_screen_name: inreplyScreenName,
    user: user,
    user_screen_name: user.screen_name,
    user_name: user.name,
    // this is to create a nova then it can't have been renovaed before or favorited
    replied_novas_IDs: [],
    favorited: false,
    renovaed: false,
    entitiesObject: {
      media: {
        type: imgType,
        size: imgSize,
        url: imgUrl
      }
    }
  })

  if (inreply) {
    Nova.inreply.update({
      $inc: { reply_count: 1 }
    })
  }
  await nova.save()

  await User.update({ _id: decoded._id },
    { '$push': { 'novas_IDs': nova._id },
      $inc: { novas_count: 1 } }, { new: true }
  )

  res.send(nova)
})

function validateNovaV2 (Nova) {
  const schema = {
    text: Joi.string()
      .min(1)
      .max(256)
      .required(),
    imgUrl: Joi.string()
      .min(3)
      .max(512)
  }
  return Joi.validate(Nova, schema)
}

// ------------------------------------------------------------------------------------------
// show nova

router.get('/show', async (req, res) => {
  let novaID = req.body.id
  // when we do the renova part if include_my_reNova is true include the original nova id

  if (!novaID) return res.status(404).send({ msg: 'Nova id  not sent' })

  if (novaID) {
    if (mongoose.Types.ObjectId.isValid(novaID)) {
      let nova = await Nova.findOne({ _id: novaID })
      if (nova) {
        return res.send(nova)
      } else {
        return res.status(404).send({ msg: 'Nova Not Found' })
      }
    }
  }
})

// ------------------------------------------------------------------------------------------

// User Timeline

router.get('/user_timeline', async (req, res) => {
  const token = req.headers['token']
  if (!token) return res.status(401).send({ msg: 'No token provided.' })
  const count = req.query.count || 100000000000

  // var verifyOptions = { expiresIn: '1h' }
  // const decoded = jwt.verify(token, config.get('jwtPrivateKey'), verifyOptions)
  const decoded = jwt.verify(token, config.get('jwtPrivateKey'))

  let novas = await Nova
    .find({ user: decoded._id })
    .sort({ _id: 1 })
    .limit(count)
  return res.send(novas)
})

// ------------------------------------------------------------------------------------------

// User Timeline 2

router.get('/v2/user_timeline', async (req, res) => {
  const token = req.headers['token']
  if (!token) return res.status(401).send({ msg: 'No token provided.' })
  const count = req.query.count || 100000000000
  var i = 1

  // var verifyOptions = { expiresIn: '1h' }
  // const decoded = jwt.verify(token, config.get('jwtPrivateKey'), verifyOptions)
  const decoded = jwt.verify(token, config.get('jwtPrivateKey'))

  const user = await User.findOne({ _id: decoded._id })
  let novasIDs = user.novas_IDs
  var novasArray = []

  for (var novaID of novasIDs) {
    let nova = await Nova.findOne({ _id: novaID })
    if (nova) novasArray.push(nova)
    i = i + 1
    if (i === count) break
  }
  return res.send(novasArray)
})

// ------------------------------------------------------------------------------------------
// renova post

router.post('/renova', async (req, res) => {
  const token = req.headers['token']
  if (!token) return res.status(401).send({ msg: 'No token provided.' })

  const decoded = jwt.verify(token, config.get('jwtPrivateKey'))

  let user = await User.findOne({ _id: decoded._id })
  if (!user) return res.status(404).send({ msg: 'The user with the given ID was not found.' })

  let novaid = req.body.nova_ID
  if (!novaid) return res.status(404).send({ msg: 'No nova id provided' })

  let nova = await Nova.findOne({ _id: novaid })
  if (!nova) return res.status(404).send({ msg: 'The Nova with the given ID was not found.' })

  let novauser = await User.findOne({ _id: nova.user })

  let nova1 = new Nova({
    text: nova.text,
    in_reply_to_status_id: nova._id,
    in_reply_to_user_id: novauser._id,
    in_reply_to_screen_name: novauser.user_screen_name,
    user: user,
    user_screen_name: user.user_screen_name,
    user_name: user.user_name,
    renovaed: true
  })

  await nova1.save()

  await User.update({ _id: decoded._id },
    { '$push': { 'novas_IDs': nova1._id },
      $inc: { novas_count: 1 } }, { new: true }
  )

  await Nova.update({ _id: nova._id },
    { $inc: { renova_count: 1 },
      '$push': { 'renovaed_by_IDs': user._id } }
  )

  user = await User.findOne({ _id: decoded._id })
  novauser = await User.findOne({ _id: nova.user })

  var userArray = { user, novauser }
  return res.status(200).send(userArray)
})
// ------------------------------------------------------------------------------------------

module.exports = router

// fe update nova el mafrood law hya reply nzawed el reply ids fel original wel reply count
