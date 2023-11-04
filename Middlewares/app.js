const express = require('express')
const app = express()

//Middlewares son intermediarios entre el req (solicitud) y res (respuesta)
//Creando un middleware
//Middleware será para el registro de las solicitudes que se realicen en la pagina
app.use((req, res, next) => {
    //Con req.url obtenemos la url de la solicitud
    console.log(`Solicitud recibida en ${req.url} en la fecha: ${new Date().toLocaleString()} \n`)
    //Con next continuamos con el flujo de la solicitud
    next();
})

app.get('/', (req, res) => {
    res.status(200).send('Bienvenido a la app')
})

app.listen(3000, () =>{
    console.log('La aplicación se esta ejecutando en http://localhost:3000')
})