const Joi = require('joi');
const bcrypt = require("bcrypt");
const _ = require("lodash");
const nodemailer = require("nodemailer");
const jwt = require("jsonwebtoken");
const winston = require("winston");
const multer = require("multer");
const path = require("path");
const config = require("config");
const { User, validateSignUp } = require("../models/user");
// const mongoose = require('mongoose')
const express = require("express");
const router = express.Router();

// ------------------------------------------------------------------------------------------

//saved Searches

/*router.get('/signin', async (req, res) => {
  const { error } = validateSignIn(req.body)*/
