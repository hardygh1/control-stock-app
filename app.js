const express = require('express')
require('dotenv').config()

const app = express()

app.get('/',(req, res) =>{
    console.log('Peticion recibida')

    res.status(200).send('<h1>Ponte a programar p papi :c</h1>')
})

const PORT = process.env.PORT 

app.listen(PORT, ()=>{
    console.log(`Servidor escuchando puerto ${PORT}`)
})