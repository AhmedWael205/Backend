const Joi = require("joi");
const bcrypt = require("bcrypt");
const _ = require("lodash");
const nodemailer = require("nodemailer");
const jwt = require("jsonwebtoken");
const winston = require("winston");
const multer = require("multer");
const path = require("path");
const config = require("config");
const Search = require("../models/search");
const User = require("../models/user");
// const mongoose = require('mongoose')
const express = require("express");
const router = express.Router();

// ------------------------------------------------------------------------------------------

//saved Searches "show list"

router.get("/list", async (req, res) => {
  const token = req.headers["token"];
  if (!token) return res.status(401).send({ msg: "No token provided." });

  const decoded = jwt.verify(token, config.get("jwtPrivateKey"));
  var user = await User.findOne({ _id: decoded._id });
  if (!user)
    return res
      .status(404)
      .send({ msg: "The user with the given ID was not found." });

  var searchArray = [];
  let search = await Search.find({ userID: decoded._id })
    .sort({ searchID: 1 })
    .toArray();
  if (search) searchArray = search;
  else searchArray = null;

  return res.status(200).send({
    list: searchArray
  });
});
