const mongoose = require('mongoose')

const novaSchema = new mongoose.Schema({
  created_at: {
    type: Date,
    default: Date.now
  },
  text: {
    type: String,
    required: true,
    minlength: 1,
    maxlength: 256
  },
  in_reply_to_status_id: mongoose.Schema.Types.ObjectId,
  in_reply_to_user_id: mongoose.Schema.Types.ObjectId,
  in_reply_to_screen_name: String,
  user: mongoose.Schema.Types.ObjectId,
  reply_count: { type: Number, default: 0 },
  renova_count: { type: Number, default: 0 },
  favorite_count: { type: Number, default: 0 },
  favorited_by_IDs: [mongoose.Schema.Types.ObjectId],
  renovaed_by_IDs: [mongoose.Schema.Types.ObjectId],
  replied_novas_IDs: [mongoose.Schema.Types.ObjectId],
  favorited: Boolean,
  renovaed: Boolean,
  entitiesObject: {
    type: new mongoose.Schema({
      hashtags: [String],
      urls: [String],
      users_mentions_ID: [mongoose.Schema.Types.ObjectId],
      media: {
        type: new mongoose.Schema({
          type: String,
          size: Number,
          url: String
        })
      }
    })
  }
})

const Nova = mongoose.model('Nova', novaSchema)

exports.Nova = Nova
