const jwt = require('jsonwebtoken')
const { User } = require('../models/user')
const mongoose = require('mongoose')
const express = require('express')
const router = express.Router()
const config = require('config')
const { Following } = require('../models/following')

// ------------------------------------------------------------------------------------------

// The Priority is for the ID

router.post('/create', async (req, res) => {
  const token = req.headers['token']
  if (!token) return res.status(401).send({ msg: 'No token provided.' })

  // var verifyOptions = { expiresIn: '1h' }
  // const decoded = jwt.verify(token, config.get('jwtPrivateKey'), verifyOptions)
  const decoded = jwt.verify(token, config.get('jwtPrivateKey'))

  var user = await User.findOne({ _id: decoded._id })
  if (!user) {
    return res
      .status(404)
      .send({ msg: 'The user with the given ID was not found.' })
  }

  let userID = req.body.user_ID
  let userSreenName = req.body.screen_name

  if (!userID && !userSreenName) {
    return res.status(404).send({ msg: 'NoUsersFound' })
  }

  if (userID) {
    if (mongoose.Types.ObjectId.isValid(userID)) {
      let user2 = await User.findOne({ _id: userID })
      if (user2) {
        let follow = await Following.findOne({
          sourceID: decoded._id,
          friendID: userID
        })
        if (follow) return res.status(403).send({ msg: 'Already Followed' })
        let following = new Following({
          sourceID: decoded._id,
          friendID: userID
        })
        await following.save()
        await User.update({ _id: decoded._id }, { $inc: { friends_count: 1 } }, { new: true })
        await User.update({ _id: userID }, { $inc: { followers_count: 1 } }, { new: true })
      } else {
        return res.status(404).send({ msg: 'The ID to follow is not valid' })
      }
    } else {
      return res.status(404).send({ msg: 'The ID to follow is not valid' })
    }
  } else {
    let user2 = await User.findOne({ screen_name: userSreenName })
    if (user2) {
      let follow = await Following.findOne({
        sourceID: decoded._id,
        friendID: user2._id
      })
      if (follow) return res.status(403).send({ msg: 'Already Followed' })
      let following = new Following({
        sourceID: decoded._id,
        friendID: user2._id
      })
      await following.save()
      await User.update({ _id: decoded._id }, { $inc: { friends_count: 1 } }, { new: true })
      await User.update({ _id: user2._id }, { $inc: { followers_count: 1 } }, { new: true })
    } else {
      return res
        .status(404)
        .send({ msg: 'The sreen name to follow is not valid' })
    }
  }
  return res.status(200).send({
    msg: 'Successfully followed'
  })
})

// ------------------------------------------------------------------------------------------

// Destory Friendship

router.post('/destroy', async (req, res) => {
  const token = req.headers['token']
  if (!token) return res.status(401).send({ msg: 'No token provided.' })

  // var verifyOptions = { expiresIn: '1h' }
  // const decoded = jwt.verify(token, config.get('jwtPrivateKey'), verifyOptions)
  const decoded = jwt.verify(token, config.get('jwtPrivateKey'))

  var user = await User.findOne({ _id: decoded._id })
  if (!user) return res.status(404).send({ msg: 'The user with the given ID was not found.' })

  let userID = req.body.user_ID
  let userSreenName = req.body.screen_name

  if (!userID && !userSreenName) return res.status(404).send({ msg: 'No Users Found' })

  if (userID) {
    if (mongoose.Types.ObjectId.isValid(userID)) {
      let user2 = await User.findOne({ _id: userID })
      if (user2) {
        let follow = await Following.findOne({
          sourceID: decoded._id,
          friendID: user2._id
        })
        if (follow) {
          await Following.deleteOne({ sourceID: decoded._id, friendID: user2._id })
          await User.update({ _id: decoded._id }, { $inc: { friends_count: -1 } }, { new: true })
          await User.update({ _id: user2._id }, { $inc: { followers_count: -1 } }, { new: true })
        } else {
          return res.status(404).send({ msg: 'you do not follow this person ' })
        }
      } else {
        return res.status(404).send({ msg: 'The ID to unfollow is not found' })
      }
    }
  } else {
    let user2 = await User.findOne({ screen_name: userSreenName })
    if (user2) {
      let follow = await Following.findOne({
        sourceID: decoded._id,
        friendID: user2._id
      })
      if (follow) {
        await Following.deleteOne({ sourceID: decoded._id, friendID: user2._id })
        await User.update({ _id: decoded._id }, { $inc: { friends_count: -1 } }, { new: true })
        await User.update({ _id: user2._id }, { $inc: { followers_count: -1 } }, { new: true })
      } else {
        return res.status(404).send({ msg: 'The sreen name to unfollow is not valid' })
      }
    } else {
      return res.status(404).send({ msg: 'The sreen name to unfollow is not valid' })
    }
  }
  return res.status(200).send({ msg: 'Successfully unfollowed' })
})

// ------------------------------------------------------------------------------------------

// Friendship Relationships

router.get('/show', async (req, res) => {
  let sourceID = req.body.source_ID
  let targetID = req.body.target_ID

  let sourceScreenName = req.body.source_screen_name
  let targetScreenName = req.body.target_screen_name

  let sourcefollowstarget = await Following.findOne({
    sourceID: sourceID,
    friendID: targetID
  }
  )

  let targetfollowssource = await Following.findOne({
    sourceID: targetID,
    friendID: sourceID
  })
  if (!sourceScreenName && !targetScreenName) {
    if (sourcefollowstarget && !targetfollowssource) {
      return res.send({ 'relationship': { 'target': { 'id': targetID, 'following': false, 'followed_by': true }, 'source': { 'id': sourceID, 'following': true, 'followed_by': false } } })
    } else if (targetfollowssource && !sourcefollowstarget) {
      return res.send({ 'relationship': { 'target': { 'id': targetID, 'following': true, 'followed_by': false }, 'source': { 'id': sourceID, 'following': false, 'followed_by': true } } })
    } else if (sourcefollowstarget && targetfollowssource) {
      return res.send({ 'relationship': { 'target': { 'id': targetID, 'following': true, 'followed_by': true }, 'source': { 'id': sourceID, 'following': true, 'followed_by': true } } })
    } else if (!sourcefollowstarget && !targetfollowssource) {
      return res.send({ 'relationship': { 'target': { 'id': targetID, 'following': false, 'followed_by': false }, 'source': { 'id': sourceID, 'following': false, 'followed_by': false } } })
    }
  } else if (sourceScreenName && !targetScreenName) {
    if (sourcefollowstarget && !targetfollowssource) {
      return res.send({ 'relationship': { 'target': { 'id': targetID, 'following': false, 'followed_by': true }, 'source': { 'id': sourceID, 'screen_name': sourceScreenName, 'following': true, 'followed_by': false } } })
    } else if (targetfollowssource && !sourcefollowstarget) {
      return res.send({ 'relationship': { 'target': { 'id': targetID, 'following': true, 'followed_by': false }, 'source': { 'id': sourceID, 'screen_name': sourceScreenName, 'following': false, 'followed_by': true } } })
    } else if (sourcefollowstarget && targetfollowssource) {
      return res.send({ 'relationship': { 'target': { 'id': targetID, 'following': true, 'followed_by': true }, 'source': { 'id': sourceID, 'screen_name': sourceScreenName, 'following': true, 'followed_by': true } } })
    } else if (!sourcefollowstarget && !targetfollowssource) {
      return res.send({ 'relationship': { 'target': { 'id': targetID, 'following': false, 'followed_by': false }, 'source': { 'id': sourceID, 'screen_name': sourceScreenName, 'following': false, 'followed_by': false } } })
    }
  } else if (!sourceScreenName && targetScreenName) {
    if (sourcefollowstarget && !targetfollowssource) {
      return res.send({ 'relationship': { 'target': { 'id': targetID, 'screen_name': targetScreenName, 'following': false, 'followed_by': true }, 'source': { 'id': sourceID, 'following': true, 'followed_by': false } } })
    } else if (targetfollowssource && !sourcefollowstarget) {
      return res.send({ 'relationship': { 'target': { 'id': targetID, 'screen_name': targetScreenName, 'following': true, 'followed_by': false }, 'source': { 'id': sourceID, 'following': false, 'followed_by': true } } })
    } else if (sourcefollowstarget && targetfollowssource) {
      return res.send({ 'relationship': { 'target': { 'id': targetID, 'screen_name': targetScreenName, 'following': true, 'followed_by': true }, 'source': { 'id': sourceID, 'following': true, 'followed_by': true } } })
    } else if (!sourcefollowstarget && !targetfollowssource) {
      return res.send({ 'relationship': { 'target': { 'id': targetID, 'screen_name': targetScreenName, 'following': false, 'followed_by': false }, 'source': { 'id': sourceID, 'following': false, 'followed_by': false } } })
    }
  } else if (sourceScreenName && targetScreenName) {
    if (sourcefollowstarget && !targetfollowssource) {
      return res.send({ 'relationship': { 'target': { 'id': targetID, 'screen_name': targetScreenName, 'following': false, 'followed_by': true }, 'source': { 'id': sourceID, 'screen_name': sourceScreenName, 'following': true, 'followed_by': false } } })
    } else if (targetfollowssource && !sourcefollowstarget) {
      return res.send({ 'relationship': { 'target': { 'id': targetID, 'screen_name': targetScreenName, 'following': true, 'followed_by': false }, 'source': { 'id': sourceID, 'screen_name': sourceScreenName, 'following': false, 'followed_by': true } } })
    } else if (sourcefollowstarget && targetfollowssource) {
      return res.send({ 'relationship': { 'target': { 'id': targetID, 'screen_name': targetScreenName, 'following': true, 'followed_by': true }, 'source': { 'id': sourceID, 'screen_name': sourceScreenName, 'following': true, 'followed_by': true } } })
    } else if (!sourcefollowstarget && !targetfollowssource) {
      return res.send({ 'relationship': { 'target': { 'id': targetID, 'screen_name': targetScreenName, 'following': false, 'followed_by': false }, 'source': { 'id': sourceID, 'screen_name': sourceScreenName, 'following': false, 'followed_by': false } } })
    }
  }
})

// ------------------------------------------------------------------------------------------

router.get('/ids', async (req, res) => {
  var userID = req.query.user_id
  var ScreenName = req.query.screen_name

  let user = await User.findOne({ $or: [{ screen_name: ScreenName }, { _id: userID }] })
  if (!user) return res.status(400).send({ 'msg': 'User Doesnt Exist' })

  let follow = await Following.find({ sourceID: user._id })
  var FollowingIDs = []
  follow.forEach(function (Data) { FollowingIDs.push(Data.friendID) })
  res.status(200).send({ FollowingIDs })
})

// ------------------------------------------------------------------------------------------

router.get('/list', async (req, res) => {
  var userID = req.query.user_id
  var ScreenName = req.query.screen_name

  let user = await User.findOne({ $or: [{ screen_name: ScreenName }, { _id: userID }] })
  if (!user) return res.status(400).send({ 'msg': 'User Doesnt Exist' })

  var UsersArray = []
  let follow = await Following.find({ sourceID: user._id })
  var FollowingsIDs = []
  follow.forEach(function (Data) { FollowingsIDs.push(new mongoose.Types.ObjectId(Data.friendID)) })
  for (var _id of FollowingsIDs) {
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
