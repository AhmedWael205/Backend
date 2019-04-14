const Joi = require('joi')
const jwt = require('jsonwebtoken')
const _ = require('lodash')
var pick = require('object.pick')
const winston = require('winston')
const { User } = require('../models/user')
const { Following } = require('../models/following')
const config = require('config')
const mongoose = require('mongoose')
const Nova = require('../models/nova')
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

// Update Nova

/*router.post('/update', async (req, res) => {
  const token = req.headers['token']
  if (!token) return res.status(401).send({ msg: 'No token provided.' })
  const decoded = jwt.verify(token, config.get('jwtPrivateKey'))
})
*/
// ------------------------------------------------------------------------------------------

router.post('/statuses', async (req, res) => {
  const { error } = validateNova(req.body)
  if (error) return res.status(400).send({ msg: error.details[0].message })
  
  const token = req.headers['token']
  if (!token) return res.status(401).send({ msg: 'No token provided.' })
  
  const decoded = jwt.verify(token, config.get('jwtPrivateKey'))
  
  const user = await User.findOne({ _id: decoded._id })
  if (!user) return res.status(404).send('The user with the given ID was not found.')
  
  if (req.body.in_reply_to_status_id)
  {
  const inreplyid = await Nova.findOne({ _id: req.body.in_reply_to_status_id})
  if (!inreplyid) return res.status(404).send('The Nova with the given ID was not found')
  }
  
  // if (media ids)
  
  //if (place id)
  
  //if (display coordinates)
  
  //let nova = new Nova({text:req.body.text})

})


module.exports = router
