const config = require("config");
const Joi = require("joi");
Joi.objectId = require("joi-objectid")(Joi);
const mongoose = require("mongoose");
const accounts = require("./routes/accounts");
const favorites = require("./routes/favorites");
const followers = require("./routes/followers");
const following = require("./routes/followings");
const friendship = require("./routes/friendships");
const user = require("./routes/users");
const notification = require("./routes/notifications");
const saved_searches = require("./routes/saved_searches");
const statuses = require("./routes/statuses");
const express = require("express");
const app = express();

if (!config.get("jwtPrivateKey")) {
  console.error("FATAL ERROR: jwtPrivateKey is not defined.");
  process.exit(1);
}

mongoose
  .connect("mongodb://localhost/ennovate")
  .then(() => console.log("Connected to MongoDB..."))
  .catch(err => console.error("Could not connect to MongoDB..."));

app.use(express.json());
app.use("/api/accounts", accounts);
app.use("/api/favorites", favorites);
app.use("/api/followers", followers);
app.use("/api/followings", followings);
app.use("/api/friendships", friendships);
app.use("/api/notifications", notifications);
app.use("/api/saved_searches", saved_searches);
app.use("/api/statuses", statuses);
app.use("/api/users", user);

const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Listening on port ${port}...`));
