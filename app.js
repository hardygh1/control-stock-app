const express = require('express')
require('dotenv').config()

const app = express()

app.get('/',(req, res) =>{
    console.log('Peticion recibida')

    res.status(200).send('<h1>Abelito deja la yerva porfavor, piensa en tu viejita :c</h1>')
})

const PORT = process.env.PORT 

app.listen(PORT, ()=>{
    console.log(`Servidor escuchando puerto ${PORT}`)
})