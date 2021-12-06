const nodemailer = require('nodemailer')
let transporter = nodemailer.createTransport({
  host: "smtp.gmail.com",
  port: 587,
  secure: false,
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS
  }
})
module.exports = {
  nodemailer,
  transporter,
  sendMail: (req, res) => {
    if (req.body._autoresponse) {
      
      transporter.sendMail({
        from: `${req.body.name} <devmayke@gmail.com>`,
        to: req.body.email || "",
        subject: "Recebi seu email",
        html: `${req.body._autoresponse}:<br>` + `${req.body.message}`
      }).then((sucesso) => {

      }).catch((err) => {
        console.log(err)
      })
    }
    if(req.body.captchaSuccess){
      const {email, message, name, _autoresponse} = req.body
      transporter.sendMail({
        from: `${req.body.name} <devmayke@gmail.com>`,
        to: req.params.email || "",
        subject: req.body.subject,
        html: `Enviado de: ${req.body.email}` + `<br>` + `${req.body.message}`
      }).then((sucesso) => {
    
        res.json({enviado:true})
      }).catch((err) => {
        console.log(err)
      })
    }
    }

    
}
