const Joi = require('joi')
const jwt = require('jsonwebtoken')
const _ = require('lodash')
var pick = require('object.pick')
const winston = require('winston')
const { User } = require('../models/user')
const mongoose = require('mongoose')
const Nova = require('../models/nova')
const express = require('express')
const router = express.Router()

// ------------------------------------------------------------------------------------------

// Lookup

router.get('/lookup', async (req, res) => {
  let usersID = req.body.user_ID
  let usersSreenName = req.body.screen_name
  if (!usersID && !usersSreenName) return res.status(404).send({ msg: 'NoUsersFound' })

  var usersArray = []
  var unfoundUsers = 0
  if (usersID) {
    for (var _id of usersID) {
      if (mongoose.Types.ObjectId.isValid(_id)) {
        let user = await User.findOne({ _id })
        if (user) {
          usersArray.push((
            _.pick(user, ['_id', 'name', 'email', 'screen_name', 'verified'])))
        }
      } else {
        unfoundUsers = unfoundUsers + 1
      }
    }
  }
  if (usersSreenName) {
    for (var screenName of usersSreenName) {
      let user = await User.findOne({ screen_name: screenName })
      if (user) {
        usersArray.push((
          _.pick(user, ['_id', 'name', 'email', 'screen_name', 'verified'])))
      } else {
        unfoundUsers = unfoundUsers + 1
      }
    }
  }
  return res.status(200).send({
    msg: `Number of unfound Users = ${unfoundUsers}`,
    users: usersArray
  })
})

// ------------------------------------------------------------------------------------------

// Profile Banner

router.get('/profile_banner', async (req, res) => {
  let userID = req.query.user_ID
  let userSreenName = req.query.screen_name
  if (!userID && !userSreenName) return res.status(404).send({ msg: 'NoUsersFound' })

  if (userID) {
    if (mongoose.Types.ObjectId.isValid(userID)) {
      let user = await User.findOne({ _id: userID })
      if (user) {
        return res.send(_.pick(user, ['profile_image_url']))
      } else {
        return res.status(404).send({ msg: 'UserNotFound' })
      }
    } else {
      return res.status(404).send({ msg: 'UserNotFound' })
    }
  } else if (userSreenName) {
    let user = await User.findOne({ screen_name: userSreenName })
    if (user) {
      return res.send(_.pick(user, ['profile_image_url']))
    } else {
      return res.status(404).send({ msg: 'UserNotFound' })
    }
  }
})

// ------------------------------------------------------------------------------------------

// Show

router.get('/show', async (req, res) => {
  let userID = req.query.user_ID
  let userSreenName = req.query.screen_name
  if (!userID && !userSreenName) return res.status(404).send({ msg: 'NoUsersFound' })

  if (userID) {
    if (mongoose.Types.ObjectId.isValid(userID)) {
      let user = await User.findOne({ _id: userID })
      if (user) {
        console.log(user.profile_image_url)
        return res.send(_.pick(user, ['_id', 'name', 'email', 'screen_name', 'verified', 'location', 'bio', 'followers_count', 'friends_count', 'novas_count', 'profile_image_url', 'profile_background_image_url']))
      } else {
        return res.status(404).send({ msg: 'UserNotFound' })
      }
    } else {
      return res.status(404).send({ msg: 'UserNotFound' })
    }
  } else if (userSreenName) {
    let user = await User.findOne({ screen_name: userSreenName })
    if (user) {
      return res.send(_.pick(user, ['_id', 'name', 'email', 'screen_name', 'verified', 'location', 'bio', 'followers_count', 'friends_count', 'novas_count', 'profile_image_url', 'profile_background_image_url']))
    } else {
      return res.status(404).send({ msg: 'UserNotFound' })
    }
  }
})

// ------------------------------------------------------------------------------------------

module.exports = router
