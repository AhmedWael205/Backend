const { User } = require('../models/user')
const { Following } = require('../models/following')
const mongoose = require('mongoose')
const express = require('express')
const router = express.Router()

// ------------------------------------------------------------------------------------------

router.get('/ids', async (req, res) => {
  var userID = req.query.user_id
  var ScreenName = req.query.screen_name

  let user = await User.findOne({ $or: [{ screen_name: ScreenName }, { _id: userID }] })
  if (!user) return res.status(400).send({ 'msg': 'User Doesnt Exist' })

  let follow = await Following.find({ friendID: user._id })
  var FollowersIDs = []
  follow.forEach(function (Data) { FollowersIDs.push(Data.sourceID) })
  res.status(200).send({ FollowersIDs })
})

// ------------------------------------------------------------------------------------------

router.get('/list', async (req, res) => {
  var userID = req.query.user_id
  var ScreenName = req.query.screen_name

  let user = await User.findOne({ $or: [{ screen_name: ScreenName }, { _id: userID }] })
  if (!user) return res.status(400).send({ 'msg': 'User Doesnt Exist' })

  var UsersArray = []
  let follow = await Following.find({ friendID: user._id })
  var FollowersIDs = []
  follow.forEach(function (Data) { FollowersIDs.push(new mongoose.Types.ObjectId(Data.sourceID)) })
  for (var _id of FollowersIDs) {
    if (mongoose.Types.ObjectId.isValid(_id)) {
      let user2 = await User.findOne({ _id })
      if (user2) {
        UsersArray.push(user2)
      }
    }
  }
  return res.status(200).send({ 'users': UsersArray })
})

// ------------------------------------------------------------------------------------------

module.exports = router
