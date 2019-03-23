const { User } = require("../models/user");
const config = require("config");
const nodemailer = require("nodemailer");
const express = require("express");
const router = express.Router();

router.get("/", async (req, res) => {
  let user = await User.findOne({ email: req.body.email });
  if (!user) return res.status(404).send("UserNotFound");

  const token = user.generateAuthToken();

  let transporter = nodemailer.createTransport({
    host: "box1109.bluehost.com",
    port: 465,
    tls: {
      rejectUnauthorized: false
    }
  });

  let mailOptions = {
    to: user.email,
    subject: "Reset your account password",
    html:
      "<h4><b>Reset Password</b></h4>" +
      "<p>To reset your password, complete this form:</p>" +
      "<a href=" +
      config.get("Url") +
      "reset_password/" +
      token +
      '">' +
      config.get("Url") +
      "reset_password/" +
      token +
      "</a>" +
      "<br><br>" +
      "<p>--Team</p>"
  };

  await transporter.sendMail(mailOptions, function(error, info) {
    if (error) {
      console.log(error);
      return res.status(500).send("Unable to send email");
    } else {
      console.log("Email sent: " + info.response);
      return res.json({
        success: true,
        message: "Check your mail to reset your password."
      });
    }
  });
});

module.exports = router;
