const { User } = require('../models/user')
const config = require('config')
const nodemailer = require('nodemailer')
const winston = require('winston')
const express = require('express')
const router = express.Router()

router.get('/:token', async (req, res) => {

    const token = req.params.token

    let transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: config.get('email'),
            pass: config.get('pass')
        },
        tls: {
            rejectUnauthorized: false
        }
    })

    let mailOptions = {
        from: config.get('email'),
        to: user.email,
        subject: 'Verify your account',
        html:
            '<h4><b>Reset Password</b></h4>' +
            '<p>To verify your account, click the following link:</p>' +
            '<a href="' +
            config.get('Url') +
            'verify/' +
            token +
            '" > ' +
            config.get('Url') +
            'verify/' +
            token +
            '</a>' +
            '<br><br>' +
            '<p>--Ennovate Team</p>'
    }

    await transporter.sendMail(mailOptions, function (error, info) {
        if (error) {
            return res.status(500).send('Unable to send email')
        } else {
            winston.info('Email sent to: ' + user.email)
            return res.json({
                msg: 'Check your mail to verify your account.'
            })
        }
    })
})

module.exports = router