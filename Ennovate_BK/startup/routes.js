const express = require("express");
const accounts = require("../routes/accounts");
/* const favorites = require("../routes/favorites");
const followers = require("../routes/followers");
const followings = require("../routes/followings");
const friendships = require("../routes/friendships");
const users = require("../routes/users");
const notifications = require("../routes/notifications");
const saved_searches = require("../routes/saved_searches");
const statuses = require("../routes/statuses")*/
const forget_password = require("../routes/forget_password");
const error = require("../middleware/error");

module.exports = function(app) {
  app.use(express.json());
  app.use("/accounts", accounts);
  /* app.use("/favorites", favorites);
  app.use("/followers", followers);
  app.use("/followings", followings);
  app.use("/friendships", friendships);
  app.use("/notifications", notifications);
  app.use("/saved_searches", saved_searches);
  app.use("/statuses", statuses);
  app.use("/users", users); */
  app.use("/forget_password", forget_password);
  app.use(error);
};
