const axios = require('axios');
const { stringify } = require('querystring');

module.exports = async (req, res) => {
  const secretKey = '6Ld2YncdAAAAAHe2AFDDyQJFpT0JyrkjKQVfZpEx'
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