const Joi = require("joi")
const bcrypt = require("bcrypt")
const _ = require("lodash")
const nodemailer = require("nodemailer")
const jwt = require("jsonwebtoken")
const winston = require("winston")
const multer = require("multer")
const path = require("path")
const config = require("config")
const { User } = require("../models/user")
const { Search } = require("../models/search")
// const mongoose = require('mongoose')
const express = require("express")
const router = express.Router()

// ------------------------------------------------------------------------------------------

// saved Searches 'show list'

router.get("/list", async (req, res) => {
  const token = req.headers["token"]
  if (!token) return res.status(401).send({ msg: "No token provided." })

  const decoded = jwt.verify(token, config.get("jwtPrivateKey"))
  let user = await User.findOne({ _id: decoded._id })
  if (!user)
    return res
      .status(404)
      .send({ msg: "The user with the given ID was not found." })

  var searchArray = []
  let search = await Search.find({ userId: decoded._id }).sort({ _id: 1 })

  if (search) searchArray = search
  else searchArray = null

  return res.status(200).send({
    list: searchArray
  })
})

// ------------------------------------------------------------------------------------------

// saved Searches 'delete all searches'

router.post("/delete_all", async (req, res) => {
  const token = req.headers["token"]
  if (!token) return res.status(401).send({ msg: "No token provided." })

  const decoded = jwt.verify(token, config.get("jwtPrivateKey"))
  let user = await User.findOne({ _id: decoded._id })
  if (!user)
    return res
      .status(404)
      .send({ msg: "The user with the given ID was not found." })

  var searchArray = [];
  let search = await Search.find({ userId: decoded._id }).sort({ _id: 1 })
  if (search) {
    searchArray = search
    await Search.deleteMany({ userId: decoded._id })
    return res.status(200).send({
      deletedlist: searchArray
    })
  } else {
    return res.status(404).send({ msg: "No searches to be deleted" });
  }
})

// saved Searches 'delete search by id'

router.post("/destroy/:id", async (req, res) => {
  const token = req.headers["token"]
  if (!token) return res.status(401).send({ msg: "No token provided." })

  const decoded = jwt.verify(token, config.get("jwtPrivateKey"))
  let user = await User.findOne({ _id: decoded._id })
  if (!user)
    return res
      .status(404)
      .send({ msg: "The user with the given ID was not found." })

  let searchid = req.params.id;
  if (!searchid) return res.status(400).send({ msg: "serachId is required." })
  else {
    let search = await Search.findOne({ userId: decoded._id, _id: searchid })
    if (!search) return res.status(404).send({ msg: "No matches found." })
    else await Search.deleteOne({ userId: decoded._id, _id: searchid })
    return res.status(200).send({
      deletedsearch: search
    })
  }
})
module.exports = router
