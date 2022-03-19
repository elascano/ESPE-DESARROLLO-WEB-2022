const express = require('express')
const mongoose = require('mongoose')
const bodyParser = require('body-parser')
const portParemeter = 8081
const EndPoints = require('./api/EndPoints')

var app = express()

app.use(bodyParser.urlencoded({extended: false}))
app.use(bodyParser.json())
//http://localhost:8081/clientes/uri
app.use("/clientes",EndPoints)

mongoose.connect(
    "mongodb+srv://admin:admin@cluster0.4o9i9.mongodb.net/CLIENTES?retryWrites=true&w=majority",
    {useNewUrlParser: true},
    (err, res) => {
        err && console.log("Error al conectarse a la base de datos")
        app.listen(portParemeter,() => {
            console.log(`Server is running on port ${portParemeter}`)
        })
    }
)