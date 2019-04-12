const express = require('express')
const accounts = require('../routes/accounts')
/* const favorites = require('../routes/favorites')
const followers = require('../routes/followers')
const followings = require('../routes/followings')
const notifications = require('../routes/notifications')
const saved_searches = require('../routes/saved_searches')  */
const friendships = require('../routes/friendships')
const statuses = require('../routes/statuses')
const users = require('../routes/users')
const forgetPassword = require('../routes/forgetPassword')
const verifyEmail = require('../routes/verifyEmail')
const error = require('../middleware/error')

module.exports = function (app) {
  app.use(express.json())
  app.use('/accounts', accounts)
  /* app.use('/favorites', favorites)
  app.use('/followers', followers)
  app.use('/followings', followings)
  app.use('/notifications', notifications)
  app.use('/saved_searches', saved_searches)  */
  app.use('/friendships', friendships)
  app.use('/statuses', statuses)
  app.use('/users', users)
  app.use('/forgetPassword', forgetPassword)
  app.use('/verifyEmail', verifyEmail)
  app.use(error)
}
