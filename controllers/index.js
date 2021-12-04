const express = require("express")
const router = express.Router()
const email = require("./nodemailer")
const recaptcha = require("./recaptcha")
const home = require("./home")

router.get("/", home)

router.post("/contact/:email", email.sendMail)
router.post("/recaptcha", recaptcha)


module.exports = router