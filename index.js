const express = require("express")
const app = express()
const router = require("./controllers/index")
const cors = require("cors")
const ejs = require("ejs")
const path = require("path")
let PORT = 5000

app.set("view engine", "ejs")
app.use(express.static(path.join(__dirname, 'public')))
app.use(express.json())
app.use(express.urlencoded({ extended: true}))
app.use(cors())
app.use("/", router)

app.listen(process.env.PORT || PORT, ()=>console.log("conectado na porta em http://localhost:"+ PORT))