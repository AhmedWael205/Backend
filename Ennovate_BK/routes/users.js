const jwt = require('jsonwebtoken')
const _ = require('lodash')
const { User } = require('../models/user')
const { Search, validateSearch } = require('../models/search')
const mongoose = require('mongoose')
const config = require('config')
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
        } else {
          unfoundUsers = unfoundUsers + 1
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

// Profile image

router.get('/profile_image', async (req, res) => {
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
        return res.send(user)
        // res.send(_.pick(user, ['_id', 'name', 'email', 'screen_name', 'verified', 'location', 'bio', 'followers_count', 'friends_count', 'novas_count', 'profile_image_url', 'profile_background_image_url']))
      } else {
        return res.status(404).send({ msg: 'UserNotFound' })
      }
    } else {
      return res.status(404).send({ msg: 'UserNotFound' })
    }
  } else if (userSreenName) {
    let user = await User.findOne({ screen_name: userSreenName })
    if (user) {
      return res.send(user)
      // res.send(_.pick(user, ['_id', 'name', 'email', 'screen_name', 'verified', 'location', 'bio', 'followers_count', 'friends_count', 'novas_count', 'profile_image_url', 'profile_background_image_url']))
    } else {
      return res.status(404).send({ msg: 'UserNotFound' })
    }
  }
})

// ------------------------------------------------------------------------------------------

// Search
router.get('/search', async (req, res) => {
  const { error } = validateSearch(req.query)
  if (error) return res.status(400).send({ msg: error.details[0].message })

  let query = req.query.query

  const token = req.headers['token']
  if (token) {
    // var verifyOptions = { expiresIn: '1h' }
  // const decoded = jwt.verify(token, config.get('jwtPrivateKey'), verifyOptions)
  const decoded = jwt.verify(token, config.get('jwtPrivateKey'))

    const search = new Search({
      userId: decoded._id,
      query: query
    })
    await search.save()

    let searchResult = await User.find(
      { $and: [ { $or: [
        { name: new RegExp('.*' + query + '.*', 'i') },
        { screen_name: new RegExp('.*' + query + '.*', 'i') },
        { email: new RegExp('.*' + query + '.*', 'i') }] }, { _id: { $ne: decoded._id } }] })
    return res.send(searchResult)
  }

  let searchResult = await User.find(
    { $or: [
      { name: new RegExp('.*' + query + '.*', 'i') },
      { screen_name: new RegExp('.*' + query + '.*', 'i') },
      { email: new RegExp('.*' + query + '.*', 'i') }]
    })

  return res.send(searchResult)
})

// ------------------------------------------------------------------------------------------

module.exports = router
