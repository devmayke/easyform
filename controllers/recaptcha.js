const axios = require('axios');
const { stringify } = require('querystring');

module.exports = async (req, res) => {
  const secretKey = process.env.RECAPTCHA_KEY
  const query = stringify({
    secret: secretKey,
    response: req.body.captcha,
    remoteip: req.connection.remoteAddress
  })
  const verifyURL = `https://google.com/recaptcha/api/siteverify?${query}`;
  axios(verifyURL)
    .then(data => {
      res.json(data.data)

    })
    .catch(e => {
      console.log(e)
    })
}