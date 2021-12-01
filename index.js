const express = require("express")
const app = express()
const router = require("./router")
const bodyParser = require("body-parser")
let PORT = 7000

app.use(express.json())
app.use(express.urlencoded({ extended: true}))
app.use("/", router)

app.listen(process.env.PORT || PORT, ()=>console.log("conectado na porta em http://localhost:"+ PORT))