const express = require("express")
const router = express.Router()
const email = require("./nodemailer")

router.get("/", (req, res)=>{
  res.send("app funcionando")
})

router.post("/contact/:email", (req, res) => {
  email.transporter.sendMail({
    from: `${req.body.name} <devmayke@gmail.com>`,
    to: req.params.email,
    subject: req.body.subject,
    html: `Enviado de: ${req.body.email}` + `<br>` + `${req.body.message}`
  }).then((sucesso) => {
    console.log(sucesso)
    res.send('email enviado com sucesso')
  }).catch((err) => {
    console.log(err)
  })
})

module.exports = router