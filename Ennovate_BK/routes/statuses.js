const Joi = require('joi')
const jwt = require('jsonwebtoken')
const _ = require('lodash')
var pick = require('object.pick')
const winston = require('winston')
const { User } = require('../models/user')
const { Following } = require('../models/following')
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
  const count = req.body.count || 10
  const excludeReplies = req.body.exclude_replies || true
  const includeEntities = req.body.include_entities || false
  const decoded = jwt.verify(token, config.get('jwtPrivateKey'))

  const following = await Following.findOne({ sourceID: decoded._id })

  if (!excludeReplies && includeEntities) {
    let novas = await Nova
      .find({ $or: [ { user: decoded._id }, { user: { $in: [ following.friendID ] } } ] })
      .sort({ _id: 1 })
      .limit(count)
    return res.send(novas)
  } else if (excludeReplies && includeEntities) {
    let novas = await Nova
      .find({ $or: [ { user: decoded._id }, { user: { $in: [ following.friendID ] } } ] })
      .sort({ _id: 1 })
      .limit(count)
      .select({ entitiesObject: -1 })
    return res.send(novas)
  } else if (!excludeReplies && !includeEntities) {
    let novas = await Nova
      .find({ $and: [
        { $or: [ { user: decoded._id }, { user: { $in: [ following.friendID ] } } ] },
        { in_reply_to_status_id: null } ] })
      .sort({ _id: 1 })
      .limit(count)
    return res.send(novas)
  } else {
    let novas = await Nova
      .find({ $and: [
        { $or: [ { user: decoded._id }, { user: { $in: [ following.friendID ] } } ] },
        { in_reply_to_status_id: null } ] })
      .sort({ _id: 1 })
      .limit(count)
      .select({ entitiesObject: -1 })
    return res.send(novas)
  }
})

// ------------------------------------------------------------------------------------------

// update Nova

router.post('/update', async (req, res) => {
  const { error } = validateNova(req.body)
  if (error) return res.status(400).send({ msg: error.details[0].message })

  const token = req.headers['token']
  if (!token) return res.status(401).send({ msg: 'No token provided.' })

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

  if (inreply) { inreplyNovaID = inreply._id
    inreplyUserID = inreply.user._id
    inreplyScreenName = inreply.user.screen_name
  }
  // if (media ids)

  // if (place id)

  // if (display coordinates)

  let nova = new Nova({text: req.body.text,
    in_reply_to_status_id: inreplyNovaID,
    in_reply_to_user_id: inreplyUserID,
    in_reply_to_screen_name: inreplyScreenName,
    user: user,
    // this is to create a nova then it can't have been renovaed before or favorited
    replied_novas_IDs: [],
    favorited: false,
    renovaed: false,
    entitiesObject: null
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
  const count = req.query.count || 10

  const decoded = jwt.verify(token, config.get('jwtPrivateKey')) 
  let novas = await Nova
    .find({ user: decoded._id })
    .sort({ _id: 1 })
    .limit(count)
  return res.send(novas)
})

// ------------------------------------------------------------------------------------------

module.exports = router
