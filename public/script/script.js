    console.log(document.querySelector(".easyform"))
    document.querySelector(".easyform").addEventListener("submit", e=>{
  
      const captcha  = document.querySelector('#g-recaptcha-response').value
      document.querySelector(".easyform").submit() 
      // fetch("localhost:5000/recaptcha",{
      //   method:"POST",
      //   headers:{ 'Content-type': 'application/json' },
      //   body:JSON.stringify({captcha:captcha})
      // })
      // .then(response=>response.json())
      // .then(data =>{
      //   console.log(data)
      // })
    })