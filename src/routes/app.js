const express = require("express")
const app = express()

//rotas
const index = require("./routes/index")
const projeto = require("./routes/ProjetoRoute")

app.use(function(req, res, next){
    res.header("Acess-Control-Allow-Origin", "*")
    res.header(
        "Access-Control-Allow-Headers",
        "Origin, x-Request-With, Content-Type, Accept"
    )
    next()
})

app.use("/", index)
app.use("/projeto", professoras)

module.exports = app