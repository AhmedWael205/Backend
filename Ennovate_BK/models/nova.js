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
  in_reply_to_status_id: { type: mongoose.Schema.Types.ObjectId, default: null },
  in_reply_to_user_id: { type: mongoose.Schema.Types.ObjectId, default: null },
  in_reply_to_screen_name: { type: String, default: null },
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



function validateNova (Nova) {
  const schema = {
  text: Joi.string()
  .min(1)
  .max(256)
  .required()
  }
  return Joi.validate(Nova, schema)
  }




exports.Nova = Nova
