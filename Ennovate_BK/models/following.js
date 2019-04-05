const mongoose = require('mongoose')

const followingSchema = new mongoose.Schema({
  sourceID: mongoose.Schema.Types.ObjectId,
  friendID: mongoose.Schema.Types.ObjectId
})

const Following = mongoose.model('Following', followingSchema)

exports.Following = Following
