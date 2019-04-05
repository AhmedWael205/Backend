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
  if (!usersID && !usersSreenName) return res.status(404).send('NoUsersFound')

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

module.exports = router
