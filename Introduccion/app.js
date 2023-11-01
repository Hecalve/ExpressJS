const express = require('express')

//Creando un servidor con express
//creando app con express
 const app = express()

 //app va a utilizar el metodo HTTP get (obtener)
 app.get('/inicio', (req, res) =>{
    res.send('Hola mundo! Mi primera app en express')
 })

 app.listen(3000, () => {
    console.log(`El servidor esta corriendo en http://localhost:3000/inicio`)
 })