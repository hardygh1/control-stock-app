const express = require('express')
const mongoose = require('mongoose')
const path = require('path')
require('dotenv').config()

const app = express()

mongoose.set("strictQuery", false);

mongoose.connect(`mongodb+srv://admindev:${process.env.MONGO_DB_PASS}@development.vcxzaiu.mongodb.net/control-stock-app?retryWrites=true&w=majority`)
.then((result) => console.log('Conexion Exitosa a la BBDD'))
.catch((err) => console.log(err))

//Esquema de Mongo
const productSchema = mongoose.Schema({
    name: {type:String, required: true},
    price: Number,
},
{
    timestamps: true
})

//Modelo
const Product = mongoose.model('Product', productSchema)


app.use(express.json())

app.post('/api/v1/products', (req, res, next) =>{

    const newProduct = new Product(req.body)

    newProduct.save().then( result =>{
        res.status(201).json({ok: true})
    })
    .catch((err)=> console.log(err))
    // console.log('Peticion recibida')
    // console.log({body: req.body})
    
})


//Archicos Estaticos
app.use(express.static(path.join(__dirname, 'public')))



const PORT = process.env.PORT 

app.listen(PORT, ()=>{
    console.log(`Servidor escuchando puerto ${PORT}`)
})