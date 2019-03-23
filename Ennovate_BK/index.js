const winston = require("winston");
const express = require("express");
const app = express();

// export ennovate_jwtPrivateKey=secret
//Or // set ennovate_jwtPrivateKey=secret

require("./startup/logging")();
require("./startup/routes")(app);
require("./startup/db")();
require("./startup/config")();
require("./startup/validation")();

const port = process.env.PORT || 3000;
const server = app.listen(port, () =>
  winston.info(`Listening on port ${port}...`)
);

module.exports = server;