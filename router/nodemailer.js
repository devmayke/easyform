const nodemailer = require('nodemailer')
let transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 587,
    secure: false, 
    auth:{
        user: "devmayke@gmail.com",
        pass: "bdivtgwyjgibqenc"
    }
})
module.exports = {
    nodemailer, 
    transporter, 
    sendMail: (req, res)=>{
        
        console.log(req.body._cc)
        if(req.body._autoresponse){
            transporter.sendMail({
                from: `${req.body.name} <devmayke@gmail.com>`,
                to: req.body.email,
                subject: "Recebi seu email",
                html: `${req.body._autoresponse}:<br>` + `${req.body.message}`
              }).then((sucesso) => {
                console.log(sucesso)
                }).catch((err) => {
                console.log(err)
              })}

        
        transporter.sendMail({
        from: `${req.body.name} <devmayke@gmail.com>`,
        to: req.params.email,
        subject: req.body.subject,
        html: `Enviado de: ${req.body.email}` + `<br>` + `${req.body.message}`
      }).then((sucesso) => {
        console.log(sucesso)
        res.send('email enviado com sucesso')
      }).catch((err) => {
        console.log(err)
      })}
}
