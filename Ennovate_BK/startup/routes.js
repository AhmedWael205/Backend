const express = require("express");
const accounts = require("../routes/accounts");
/* const favorites = require("../routes/favorites");
const followers = require("../routes/followers");
const followings = require("../routes/followings");
const friendships = require("../routes/friendships");
const users = require("../routes/users");
const notifications = require("../routes/notifications");
const saved_searches = require("../routes/saved_searches");
const statuses = require("../routes/statuses"); */
const error = require("../middleware/error");

module.exports = function(app) {
  app.use(express.json());
  app.use("/api/accounts", accounts);
  /* app.use("/api/favorites", favorites);
  app.use("/api/followers", followers);
  app.use("/api/followings", followings);
  app.use("/api/friendships", friendships);
  app.use("/api/notifications", notifications);
  app.use("/api/saved_searches", saved_searches);
  app.use("/api/statuses", statuses);
  app.use("/api/users", users); */
  app.use(error);
};
