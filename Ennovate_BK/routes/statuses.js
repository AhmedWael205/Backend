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
      let novas = await Nova.find({
        $or: [{ user: decoded._id }, { user: { $in: friendIDs } }]
      })
        .sort({ _id: -1 })
        .limit(count)
      return res.send(novas)
    } else {
      let novas = await Nova.find({
        $and: [
          { $or: [{ user: decoded._id }, { user: { $in: friendIDs } }] },
          { renovaed: false }
        ]
      })
        .sort({ _id: -1 })
        .limit(count)
      return res.send(novas)
    }
  } else {
    if (excludeReplies === 'false') {
      let novas = await Nova.find({ user: decoded._id })
        .sort({ _id: -1 })
        .limit(count)
      return res.send(novas)
    } else {
      let novas = await Nova.find({
        $and: [{ user: decoded._id }, { renovaed: false }]
      })
        .sort({ _id: -1 })
        .limit(count)
      return res.send(novas)
    }
  }
})

// ------------------------------------------------------------------------------------------

// update Nova V3 (Uploading the Image to the backend)

// Set The Storage Engine
const storage = multer.diskStorage({
  destination: './public/uploads/novaImages',
  filename: function (req, file, cb) {
    cb(
      null,
      file.fieldname + '-' + Date.now() + path.extname(file.originalname)
    )
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

router.post('/v3/update', upload.single('novaImage'), async (req, res) => {
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

  const imgUrl = url + 'public/uploads/novaImages/' + req.file.filename || null
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

  await User.update(
    { _id: decoded._id },
    { $push: { novas_IDs: nova._id }, $inc: { novas_count: 1 } },
    { new: true }
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

// update Nova V2 (Uploading the Image url only)

router.post('/v2/update', async (req, res) => {
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
  var inreplyUserID = null
  var inreplyNovaID = req.body.in_reply_to_status_id || null
  var inreplyScreenName = null

  if (inreplyNovaID) {
    inreply = await Nova.findOne({
      _id: new mongoose.Types.ObjectId(inreplyNovaID)
    })
    if (!inreply) return res.status(404).send({ msg: 'The Nova with the given ID was not found' })
  }

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

  // user mentions

  const lengthMentions = req.body.user_mentions_count
  if (lengthMentions !== 0) {
    var mentionsArray = []
    var mentionsId = []
    for (let i = 0; i < lengthMentions; i++) {
      mentionsArray.push(req.body.user_mentions_screen_names[i])
    }
    for (let i = 0; i < lengthMentions; i++) {
      mentionsId.push(await User.findOne({ screen_name: mentionsArray[i] }))
    }
  }

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
      },
      users_mentions_ID: mentionsId
    }
  })

  await nova.save()

  if (inreply) {
    Nova.update(
      { _id: inreply._id },
      { $push: { replied_novas_IDs: inreply._id }, $inc: { reply_count: 1 } }
    )
  }

  await User.update(
    { _id: decoded._id },
    { $push: { novas_IDs: nova._id }, $inc: { novas_count: 1 } },
    { new: true }
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

router.get('/show/:novaID', async (req, res) => {
  // checking token
  const token = req.headers['token']
  if (!token) return res.status(401).send({ msg: 'No token provided.' })
  const decoded = jwt.verify(token, config.get('jwtPrivateKey'))
  // checking user
  const user = await User.findOne({ _id: decoded._id })
  if (!user) return res.status(404).send({ msg: 'The user with the given ID was not found.' })

  let novaID = req.params.novaID
  // check if nova id valid
  if (novaID) {
    if (mongoose.Types.ObjectId.isValid(novaID)) {
      let nova = await Nova.findOne({ _id: novaID })
      if (nova) {
        // check if nova is favorited by the auth user
        // if favorited change favorited in the nova to true
        nova.favorited = false
        var replyArray = []
        if (nova.favorite_count !== 0) {
          for (let i = 0; i < nova.favorite_count; i++) {
            if (nova.favorited_by_IDs[i] === decoded._id) {
              nova.favorited = true
              i = nova.favorite_count
            }
          }
        }
        replyArray.push(nova)
        // reply array will be what is sent in response it will
        // have the first nova object the required nova
        // the others in the array will be the nova's replies
        // getting replies of the nova from replied_novas_IDs
        const lengthReply = nova.reply_count
        var replyIDarray = []
        if (lengthReply !== 0) {
          for (let i = 0; i < lengthReply; i++) {
            replyIDarray.push(nova.replied_novas_IDs[i])
          }
          for (let i = 0; i < lengthReply; i++) {
            let anova = await Nova.findOne({ _id: replyIDarray[i] })
            anova.favorited = false
            // check if reply is favorited by auth user
            if (anova.favorite_count !== 0) {
              for (let i = 0; i < anova.favorite_count; i++) {
                if (anova.favorited_by_IDs[i] === decoded._id) {
                  anova.favorited = true
                  i = anova.favorite_count
                }
              }
            }
            replyArray.push(anova)
          }
        }
        return res.status(200).send(replyArray)
      } else {
        return res.status(404).send({ msg: 'Nova Not Found' })
      }
    }
  } else {
    return res.status(404).send({ msg: 'Nova id not sent' })
  }
})

// ------------------------------------------------------------------------------------------

// User Timeline

router.get('/user_timeline/:screen_name', async (req, res) => {
  const token = req.headers['token']
  const count = req.query.count || 100000000000

  // var verifyOptions = { expiresIn: '1h' }
  // const decoded = jwt.verify(token, config.get('jwtPrivateKey'), verifyOptions)
  const user = await User.findOne({ screen_name: req.params.screen_name })
  if (!user) return res.status(404).send({ msg: 'The user with the given screen name was not found.' })

  let novas = await Nova.find({ user: user._id })
    // .find({ $or: [{ $and: [ { user: user._id }, { renovaed: true } ] }, { $and: [{ user: user._id }, { renovaed: false }, { in_reply_to_status_id: null }] }] })
    .sort({ _id: 1 })
    .limit(count)

  if (!token) return res.send({ novas })
  else {
    const decoded = jwt.verify(token, config.get('jwtPrivateKey'))
    if (user.screen_name === decoded.screen_name) return res.send({ novas })
    let follow = await Following.findOne({
      $and: [{ friendID: user._id }, { sourceID: decoded._id }]
    })
    if (follow) return res.send({ following: true, novas })
    else return res.send({ following: false, novas })
  }
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
  // check token
  const token = req.headers['token']
  if (!token) return res.status(401).send({ msg: 'No token provided.' })

  const decoded = jwt.verify(token, config.get('jwtPrivateKey'))
  // check user
  let user = await User.findOne({ _id: decoded._id })
  if (!user) return res.status(404).send({ msg: 'The user with the given ID was not found.' })
  // check novaID
  let novaid = req.body.nova_ID
  if (!novaid) return res.status(404).send({ msg: 'No nova id provided' })
  // check nova
  let nova = await Nova.findOne({ _id: novaid })
  if (!nova) return res.status(404).send({ msg: 'The Nova with the given ID was not found.' })

  let novauser = await User.findOne({ _id: nova.user })
  // a renova is still a nova but with renovaed = true
  // and in_reply_to points to original Nova parameters (novaID,userID,user_screen_name)
  let nova1 = new Nova({
    text: nova.text,
    in_reply_to_status_id: new mongoose.Types.ObjectId(nova._id),
    in_reply_to_user_id: new mongoose.Types.ObjectId(novauser._id),
    in_reply_to_screen_name: nova.user_screen_name,
    user: user,
    user_screen_name: user.screen_name,
    user_name: user.name,
    renovaed: true
  })

  await nova1.save()
  // update auth user
  await User.update({ _id: decoded._id },
    { '$push': { 'novas_IDs': nova1._id },
      $inc: { novas_count: 1 } }, { new: true }
  )
  // update original nova
  await Nova.update({ _id: nova._id },
    { $inc: { renova_count: 1 },
      '$push': { 'renovaed_by_IDs': user._id } }
  )
  // getting the authenticating user and the original nova user to send in response

  user = await User.findOne({ _id: decoded._id })
  novauser = await User.findOne({ _id: nova.user })

  // const notify = { nova_ID: nova._id, user_action_ID: user._id, date: Date(Date.now()) }

  // novauser.notification_object.renova_list.push(notify)
  // const renovaList = novauser.notification_object.renova_list

  // await User.updateOne({ screen_name: novauser.screen_name },
  // { notification_object: {
  //  renova_list: renovaList
  // }
  // }, { new: true }
  // )

  var userArray = { user, novauser }
  return res.status(200).send(userArray)
})

// ------------------------------------------------------------------------------------------
// delete nova

router.post('/destroy', async (req, res) => {
  // check token
  const token = req.headers['token']
  if (!token) return res.status(401).send({ msg: 'No token provided.' })

  const decoded = jwt.verify(token, config.get('jwtPrivateKey'))
  // check user
  let user = await User.findOne({ _id: decoded._id })
  if (!user) return res.status(404).send({ msg: 'The user with the given ID was not found.' })
  // check novaID and nova
  let novaid = req.body._id
  if (!novaid) return res.status(404).send({ msg: 'No nova id provided' })
  let nova = await Nova.findOne({ _id: novaid })
  if (!nova) return res.status(404).send({ msg: 'The Nova with the given ID was not found.' })

  // check renovaed boolean if true then this is a bad request it is only valid for novas
  if (nova.renovaed) return res.status(401).send({ msg: 'bad request this is a renova not a nova' })

  let user2 = await User.findOne({ _id: nova.user })

  // check if The user can delete this nova
  if (user._id.equals(user2._id)) {
    // if it was in reply to another nova
    // dec reply count in original nova
    // pull from inreplytonovaids
    if (nova.in_reply_to_status_id) {
      await Nova.update({ _id: nova.in_reply_to_status_id },
        { $inc: { reply_count: -1 },
          '$pull': { 'replied_novas_IDs': novaid } })
    }

    // normal nova

    // deleting all replies to the nova
    const lengthReply = nova.reply_count
    if (lengthReply !== 0) {
      var inreplyarray = []
      for (let i = 0; i < lengthReply; i++) {
        inreplyarray.push(nova.replied_novas_IDs[i])
      }
      for (let i = 0; i < lengthReply; i++) {
        // update the repling user
        await User.update({ _id: inreplyarray[i].user },
          { '$pull': { 'novas_IDs': inreplyarray[i]._id },
            $inc: { novas_count: -1 } }
        )
        await Nova.deleteOne({ _id: inreplyarray[i]._id })
      }
    }
    // deleting all its renovas
    const lengthRenova = nova.renova_count
    if (lengthRenova !== 0) {
      var renovaArray = []
      for (let i = 0; i < lengthRenova; i++) {
        renovaArray.push(nova.renovaed_by_IDs[i])
      }
      for (let i = 0; i < lengthRenova; i++) {
        // updating the renovar
        await User.update({ _id: renovaArray[i].user },
          { '$pull': { 'novas_IDs': renovaArray[i]._id },
            $inc: { novas_count: -1 } }
        )
        await Nova.deleteOne({ _id: renovaArray[i]._id })
      }
    }
    // updating auth user
    await User.update({ _id: user._id },
      { '$pull': { 'novas_IDs': novaid },
        $inc: { novas_count: -1 } })
    // finally deleting the nova/reply
    await Nova.deleteOne({ _id: novaid })
    // return in response the auth user
    return res.status(200).send(user)
  } else return res.status(404).send({ msg: 'No authentication to delete this nova' })
})

// ------------------------------------------------------------------------------------------
// unrenova

router.post('/unrenova', async (req, res) => {
  // check token
  const token = req.headers['token']
  if (!token) return res.status(401).send({ msg: 'No token provided.' })

  const decoded = jwt.verify(token, config.get('jwtPrivateKey'))
  // check user
  let user = await User.findOne({ _id: decoded._id })
  if (!user) return res.status(404).send({ msg: 'The user with the given ID was not found.' })
  // check novaID and nova
  let novaid = req.body._id
  if (!novaid) return res.status(404).send({ msg: 'No nova id provided' })
  let nova = await Nova.findOne({ _id: novaid })
  if (!nova) return res.status(404).send({ msg: 'The reNova with the given ID was not found.' })
  // check renovaed boolean
  if (!nova.renovaed) return res.status(401).send({ msg: 'bad request this is not a renova' })
  // check if user can delete this renova
  let user2 = await User.findOne({ _id: nova.user })
  if (user._id.equals(user2._id)) {
    // deleting all replies to this renova
    const lengthReply = nova.reply_count
    if (lengthReply !== 0) {
      var inreplyarray = []
      for (let i = 0; i < lengthReply; i++) {
        inreplyarray.push(nova.replied_novas_IDs[i])
      }
      for (let i = 0; i < lengthReply; i++) {
        await User.update({ _id: inreplyarray[i].user },
          { '$pull': { 'novas_IDs': inreplyarray[i]._id },
            $inc: { novas_count: -1 } }
        )
        await Nova.deleteOne({ _id: inreplyarray[i]._id })
      }
    }
    /* const lengthRenova = nova.renova_count
    if (lengthRenova !== 0) {
      var renovaArray = []
      for (let i = 0; i < lengthRenova; i++) {
        renovaArray.push(nova.renovaed_by_IDs[i])
      }
      for (let i = 0; i < lengthRenova; i++) {
        await User.update({ _id: renovaArray[i].user },
          { '$pull': { 'novas_IDs': renovaArray[i]._id },
            $inc: { novas_count: -1 } }
        )
        await Nova.deleteOne({ _id: renovaArray[i]._id })
      }
    } */

    // update the original nova (dec the renovaed count and pull the renova id from renovaed_by_IDs)
    await Nova.update({ _id: nova.in_reply_to_status_id },
      { '$pull': { 'renovaed_by_IDs': novaid },
        $inc: { renova_count: -1 } })
    // update auth user
    await User.update({ _id: user._id },
      { '$pull': { 'novas_IDs': novaid },
        $inc: { novas_count: -1 } })
    // delete nova
    await Nova.deleteOne({ _id: novaid })
    // return auth user
    user = await User.findOne({ _id: decoded._id })
    return res.status(200).send(user)
  } else return res.status(404).send({ msg: 'No authentication to delete this renova' })
})

// ------------------------------------------------------------------------------------------
// get renovars

router.get('/renovars/:novaID', async (req, res) => {
  // no need for a token
  // check novaID
  let novaID = req.params.novaID
  if (novaID) {
    // check nova
    let nova = await Nova.findOne({ _id: novaID })
    if (nova) {
      // getting all renovas
      const lengthRenova = nova.renova_count
      if (lengthRenova !== 0) {
        var renovarsArray = []
        for (let i = 0; i < lengthRenova; i++) {
          renovarsArray.push(nova.renovaed_by_IDs[i])
        }
        // getting all renovars with id of renova
        var renovars = []
        for (let i = 0; i < lengthRenova; i++) {
          let renovar = await User.findOne({ _id: renovarsArray[i] })
          renovars.push(renovar)
        }
        // send in response user objects of all renovars of the nova
        return res.status(200).send(renovars)
      } else {
        return res.status(200).send({ msg: 'No renovars for this nova' })
      }
    } else {
      return res.status(404).send({ msg: 'Nova Not Found' })
    }
  }
  return res.status(404).send({ msg: 'Nova id  not sent' })
})

// ------------------------------------------------------------------------------------------
// update nova
// this is the used version

router.post('/update', async (req, res) => {
  // validate the request body
  const { error } = validateNovaV3(req.body)
  if (error) return res.status(400).send({ msg: error.details[0].message })
  // check token
  const token = req.headers['token']
  if (!token) return res.status(401).send({ msg: 'No token provided.' })

  // var verifyOptions = { expiresIn: '1h' }
  // const decoded = jwt.verify(token, config.get('jwtPrivateKey'), verifyOptions)
  const decoded = jwt.verify(token, config.get('jwtPrivateKey'))
  // check user
  const user = await User.findOne({ _id: decoded._id })
  if (!user) return res.status(404).send({ msg: 'The user with the given ID was not found.' })
  // getting some of nova parameters from body
  const imgUrl = req.body.imgUrl || null
  const imgSize = req.body.imgSize || null
  const imgType = req.body.imgType || null
  // check if it is a reply
  let inreplytostatusid = req.body.in_reply_to_status_id || null
  if (inreplytostatusid) {
    let inreplynova = await Nova.findOne({ _id: inreplytostatusid })
    // checking that the nova to reply to exists
    if (inreplynova) {
      var inreplyuserid = inreplynova.user
      var inreplyscreenname = inreplynova.user_screen_name
    } else {
      return res.status(404).send({ msg: 'The Nova to reply to was not found' })
    }
  // if it was not a reply
  } else {
    inreplyuserid = null
    inreplyscreenname = null
  }
  // checking user mentions
  if (req.body.user_mentions_count) {
    if (req.body.user_mentions_count !== 0) {
      if (req.body.user_mentions_screen_names) {
        var mentionsArray = []
        var mentionsId = []
        for (let i = 0; i < req.body.user_mentions_count; i++) {
          mentionsArray.push(req.body.user_mentions_screen_names[i])
        }
        for (let i = 0; i < req.body.user_mentions_count; i++) {
          let mentionuser = await User.findOne({ screen_name: mentionsArray[i] })
          if (mentionuser) {
            mentionsId.push(mentionuser)
          } else {
            return res.status(404).send({ msg: 'The user ' + mentionsArray[i] + ' mentioned was not found' })
          }
        }
      } else {
        return res.status(404).send({ msg: 'bad request the mentions screen names was not sent ' })
      }
    } else {
      mentionsId = null
    }
  } else {
    mentionsId = null
  }
  // creating the new nova
  let nova = new Nova({
    text: req.body.text,
    in_reply_to_status_id: inreplytostatusid,
    in_reply_to_user_id: inreplyuserid,
    in_reply_to_screen_name: inreplyscreenname,
    user: user,
    user_screen_name: user.screen_name,
    user_name: user.name,
    entitiesObject: {
      users_mentions_ID: mentionsId,
      media: {
        type: imgType,
        size: imgSize,
        url: imgUrl
      }
    }
  })
  await nova.save()
  // if it was a reply update the replied_to nova
  if (inreplyuserid) {
    await Nova.update({ _id: inreplytostatusid },
      { '$push': { 'replied_novas_IDs': nova._id },
        $inc: { reply_count: 1 } }, { new: true }
    )
  }
  // update auth user
  await User.update({ _id: decoded._id },
    { '$push': { 'novas_IDs': nova._id },
      $inc: { novas_count: 1 } }, { new: true }
  )
  // send the new nova in the response
  return res.send(nova)
})

// ------------------------------------------------------------------------------------------
// validate request body v3
// this is the one used
// to validate request body of update nova
function validateNovaV3 (Nova) {
  const schema = {
    text: Joi.string()
      .min(1)
      .max(256)
      .required(),
    imgUrl: Joi.string()
      .min(3)
      .max(512),
    imgType: Joi.string(),
    imgSize: Joi.string(),
    in_reply_to_status_id: Joi.string(),
    user_mentions_count: Joi.string(),
    user_mentions_screen_names: Joi.array()
  }
  return Joi.validate(Nova, schema)
}

// ------------------------------------------------------------------------------------------

/*
// ------------------------------------------------------------------------------------------
// get renova
// it won't be used so i commented it
router.get('/renova/:id', async (req, res) => {
  let novaID = req.params.novaID
  if (novaID) {
    let nova = await Nova.findOne({ _id: novaID })
    if (nova) {
      const lengthRenova = nova.renova_count
      if (lengthRenova !== 0) {
        var renovasArray = []
        let renovas = await Nova.find({ in_reply_to_status_id: novaID}).sort({ _id: -1})
        if (renovas.length) {
          renovasArray = renovas
          return res.status(200).send(renovasArray)
        } else {
          return res.status(200).send({ msg: 'This Nova was not renovaed'})
        }
      } else {
        return res.status(200).send({ msg: 'This Nova was not renovaed'})
      }
    } else {
      return res.status(404).send({ msg: 'Nova Not Found' })
    }
  }
  return res.status(404).send({ msg: 'Nova id  not sent' })
})
 //------------------------------------------------------------------------------------------
 //Lookup
 // it won't be used so i commented it
router.get('/lookup', async (req, res) => {
  let novasID = req.body.nova_ID
  if (!novasID) return res.status(404).send({ msg: 'No Novas Found' })
  var novasArray = []
  var unfoundNovas = 0
  if (novasID) {
    for (var _id of novasID) {
      if (mongoose.Types.ObjectId.isValid(_id)) {
        let nova = await Nova.findOne({ _id })
        if (nova) {
          novasArray.push(nova)
        } else {
          unfoundNovas = unfoundNovas + 1
        }
      } else {
        unfoundNovas = unfoundNovas + 1
      }
    }
  }
  return res.status(200).send({
    novasArray
  })
})
*/

module.exports = router
