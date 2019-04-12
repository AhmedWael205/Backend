const mongoose = require('mongoose')

const followingSchema = new mongoose.Schema({
  sourceID: { type: mongoose.Schema.Types.ObjectId, required: true },
  friendID: { type: mongoose.Schema.Types.ObjectId, required: true }
})

const Following = mongoose.model('Following', followingSchema)

exports.Following = Following
