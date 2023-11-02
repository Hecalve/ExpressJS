const express = require('express')
const app = express()

//Enrutamiento de nuestra pagina

app.get('/', (req, res) =>{
    res.send('Inicio')
})

app.get('/home', (req, res) =>{
    res.send('¡Bienvenido! Estas en la pagina de inicio :)')
})

app.get('/inicioSesion', (req, res) => {
    res.send('Estas en el inicio de sesión')
})

//Para manejar rutas no definidas utilizamos el comodin *
app.get('*', (req, res) =>{
    res.send('Error 400. Pagina no encontrada')
})

app.listen(3000, () => {
    console.log(`Se inicio la app en http://localhost:3000/home`)
})