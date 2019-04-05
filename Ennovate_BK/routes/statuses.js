const Joi = require('joi')
const jwt = require('jsonwebtoken')
const _ = require('lodash')
var pick = require('object.pick')
const winston = require('winston')
const { User } = require('../models/user')
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
  const novas = await Nova // # TODO Zabtha
    .find({ user: decoded._id })
    .sort({ _id: 1 })
    .limit(count)

  if (!excludeReplies && includeEntities) {
    return res.send(novas)
  } else if (excludeReplies && includeEntities) {
    return res.send(novas.select('-entitiesObject')) // # TODO Zabtha
  } else if (!excludeReplies && !includeEntities) { 
    return res.send(novas.select('-entitiesObject')) // # TODO Zabtha
  } else {
    return res.send(_.pick(novas, ['text'])) // # TODO Zabtha
  } 
})

// ------------------------------------------------------------------------------------------

module.exports = router
