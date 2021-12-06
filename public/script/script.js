function $(value) {
  return document.querySelector(value)
}
$(".btn-send").addEventListener("click", e => {

  const captcha = document.querySelector('#g-recaptcha-response').value
  fetch("http://localhost:5000/recaptcha", {
    method: "POST",
    headers: { 'Content-type': 'application/json' },
    body: JSON.stringify({ captcha: captcha })
  })
    .then(response => response.json())
    .then(data => {
      if (data.success) {
        fetch("http://localhost:5000/contact/devmayke@gmail.com", {
          method: "POST",
          headers: { 'Content-type': 'application/json' },
          body: JSON.stringify({
            captchaSuccess: data.success,
            name: $("#name").value,
            email: $("#email").value,
            subject: $("#subject").value,
            message: $("#message").value,
            _autoresponse: $("#_autoresponse").value
          })
        })
          .then(res => res.json())
          .then(data2 => {
            if (data2.enviado) {
              window.location.assign("https://www.google.com")
            }
          })
          .catch(e => console.log(e))
      }
    })
})