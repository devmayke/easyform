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
    transporter    
}
