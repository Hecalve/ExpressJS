const express = require('express')
const morgan = require('morgan')
const app = express()

//Middleware morgan
//Este middleware permite obtener información de las solicites y respuestas que se 
//presentan en la app
app.use(morgan('dev'))

app.get('/', (req, res) => {
    res.status(200).send('Bienvenido a la app')
})

app.listen(3000, () =>{
    console.log('La aplicación se esta ejecutando en http://localhost:3000')
})