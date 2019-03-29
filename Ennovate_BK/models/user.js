const config = require('config')
const jwt = require('jsonwebtoken')
const Joi = require('joi')
const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    minlength: 3,
    maxlength: 15
  },
  email: {
    type: String,
    required: true,
    minlength: 5,
    maxlength: 128,
    unique: true
  },
  password: {
    type: String,
    required: true,
    minlength: 8,
    maxlength: 1024
  },
  created_at: {
    type: Date,
    default: Date.now
  },
  screen_name: {
    type: String,
    required: true,
    minlength: 3,
    maxlength: 15,
    unique: true
  },
  location: String,
  bio: String,
  followers_count: { type: Number, default: 0 },
  favorites_count: { type: Number, default: 0 },
  friends_count: { type: Number, default: 0 },
  novas_count: { type: Number, default: 0 },
  novas_IDs: [mongoose.Schema.Types.ObjectId],
  favorites_novas_IDs: [mongoose.Schema.Types.ObjectId],
  profile_background_color: String,
  profile_background_image_url: String,
  profile_image_url: String,
  default_profile: Boolean,
  default_profile_image: Boolean,
  notification_object: {
    type: new mongoose.Schema({
      renova_list: {
        type: new mongoose.Schema({
          nova_ID: [mongoose.Schema.Types.ObjectId],
          user_action_ID: [mongoose.Schema.Types.ObjectId],
          date: Date
        })
      },
      mention_list: {
        type: new mongoose.Schema({
          nova_ID: [mongoose.Schema.Types.ObjectId],
          user_action_ID: [mongoose.Schema.Types.ObjectId],
          date: Date
        })
      },
      favorite_list: {
        type: new mongoose.Schema({
          nova_ID: [mongoose.Schema.Types.ObjectId],
          user_action_ID: [mongoose.Schema.Types.ObjectId],
          date: Date
        })
      }
    })
  }
})

userSchema.methods.generateAuthToken = function () {
  const token = jwt.sign(
    { _id: this._id, screen_name: this.screen_name },
    config.get('jwtPrivateKey')
  )
  return token
}

const User = mongoose.model('User', userSchema)

function validateUser(user) {
  const schema = {
    name: Joi.string()
      .min(3)
      .max(15)
      .required(),
    email: Joi.string()
      .min(5)
      .max(128)
      .required()
      .email(),
    password: Joi.string()
      .min(8)
      .max(25)
      .required(),
    screen_name: Joi.string()
      .min(3)
      .max(15)
      .required()
      .token()
  }

  return Joi.validate(user, schema)
}

exports.User = User
exports.validateSignUp = validateUser
