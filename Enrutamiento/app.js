// app.js Es nuestro archivo de programación principal

const express = require('express')
const app = express()
//urlencoded permite obtener la información que se envia en post por medio de la url o el cuerpo de la solicitud
app.use(express.urlencoded({ extended: true }))
//Enrutamiento de nuestra pagina

app.get('/', (req, res) =>{
    //Metodo para enviar como respuesta al enlace / un archivo html
    res.sendFile(__dirname + '/index.html')
})

app.get('/home', (req, res) =>{
    res.send('¡Bienvenido! Estas en la pagina de inicio :)')
})

app.get('/inicioSesion', (req, res) => {
    res.sendFile(__dirname + '/inicio-sesion.html')
})

app.post('/bienvenido', (req, res) => {
    const usuario = req.body.usser
    const contra = req.body.pass
    res.send(`Gracias por iniciar sesión ${usuario} y tu contraseña es ${contra}`)
})

//Para manejar rutas no definidas utilizamos el comodin *
app.get('*', (req, res) =>{
    res.sendFile(__dirname + '/error.html')
})

app.listen(3000, () => {
    console.log(`Se inicio la app en http://localhost:3000/home`)
})