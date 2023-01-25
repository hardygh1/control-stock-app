const express = require('express')
require('dotenv').config()

const app = express()

app.get('/',(req, res) =>{
    console.log("Peticion recibida")

    res.send('<h1>Hola Mundo</h1>')
})

const PORT = process.env.PORT 

app.listen(4000, ()=>{
    console.log(`Servidor escuchando puerto ${PORT}`)
})