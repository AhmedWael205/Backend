const mongoose = require('mongoose')
const Joi = require('joi')

const searchSchema = new mongoose.Schema({
  created_at: {
    type: Date,
    default: Date.now
  },
  userId: {
    type: Number,
    required: true
  },
  query: {
    type: String,
    required: true,
    maxlength: 15
  }
})

function validateSearch (search) {
  const schema = {
    query: Joi.string()
      .max(15)
      .required()
  }

  return Joi.validate(search, schema)
}

const Search = mongoose.model('Search', searchSchema)

exports.Search = Search
exports.validateSearch = validateSearch
