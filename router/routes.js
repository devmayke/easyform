const fetch = require('node-fetch');
const { stringify } = require('querystring');

module.exports = {
  index:(req, res)=>{
    res.send("home")

  },
  recaptcha:(req, res)=>{
    const secretKey = '6LdpvDEUAAAAAHszsgB_nnal29BIKDsxwAqEbZzU';

    // Verify URL
    const query = stringify({
      secret: secretKey,
      response: req.body.captcha,
      remoteip: req.connection.remoteAddress
    });
    const verifyURL = `https://google.com/recaptcha/api/siteverify?${query}`;
  
    // Make a request to verifyURL
    const body = await fetch(verifyURL).then(res => res.json());
  
    // If not successful
    if (body.success !== undefined && !body.success)
      return res.json({ success: false, msg: 'Failed captcha verification' });
  
    // If successful
    return res.json({ success: true, msg: 'Captcha passed' });
  });
  }
}