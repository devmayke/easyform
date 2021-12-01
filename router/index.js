const express = require("express")
const router = express.Router()
const email = require("./nodemailer")
const route = require("./routes")

router.get("/", route.index)

router.post("/contact/:email", email.sendMail)

module.exports = router