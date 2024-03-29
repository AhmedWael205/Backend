const express = require('express')
const accounts = require('../routes/accounts')
const favorites = require('../routes/favorites')
const followers = require('../routes/followers')
const notifications = require('../routes/notifications')
const savedSearches = require('../routes/saved_searches')
const friendships = require('../routes/friendships')
const resertPassword = require('../routes/reset_password')
const allOtherRoutes = require('../routes/allOtherRoutes')
const statuses = require('../routes/statuses')
const users = require('../routes/users')
const forgetPassword = require('../routes/forgetPassword')
const verifyEmail = require('../routes/verifyEmail')
const error = require('../middleware/error')
const path = require('path')

module.exports = function (app) {
  app.use(express.json())
  app.use('/accounts', accounts)
  app.use('/favorites', favorites)
  app.use('/followers', followers)
  app.use('/notifications', notifications)
  app.use('/saved_searches', savedSearches)
  app.use('/friendships', friendships)
  app.use('/statuses', statuses)
  app.use('/users', users)
  app.use('/forgetPassword', forgetPassword)
  app.use('/verifyEmail', verifyEmail)
  app.use('/reset_password', resertPassword)
  app.use('/public/uploads/profileImages', express.static(path.join(__dirname, '../public/uploads/profileImages')))
  app.use('/public/uploads/novaImages', express.static(path.join(__dirname, '../public/uploads/novaImages')))
  app.use('*', allOtherRoutes)
  app.use(error)
}
