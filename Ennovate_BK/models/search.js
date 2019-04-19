const mongoose = require("mongoose");
const Joi = require("joi");

const searchSchema = new mongoose.Schema({
  created_at: {
    type: Date,
    default: Date.now
  },
  userId: {
    type: Number,
    required: true
  },
  searchID: { type: mongoose.Schema.Types.ObjectId, required: true },
  name: {
    type: String,
    required: true,
    maxlength: 15
  },
  query: {
    type: String,
    required: true,
    maxlength: 15
  }
});

function validateSearch(search) {
  const schema = {
    name: Joi.string()
      .max(15)
      .required(),
    query: Joi.string()
      .max(15)
      .required()
  };

  return Joi.validate(user, schema);
}

const Search = mongoose.model("Search", searchSchema);

exports.Search = Search;
exports.validateSearch = validateSearch;
