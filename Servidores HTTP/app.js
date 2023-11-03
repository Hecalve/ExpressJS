const express = require('express')
const app = express();

app.use(express.urlencoded({ extended: true}))

app.get('/', (req, res) => {
    //El metodo status define el estado HTTP de la respuesta del servidor al cliente
    //Los estados 200 son respuestas satisfactorias
    res.status(200).send('Pagina de inicio mostrada exitosamente')
})

app.get('/registro', (req, res) => {
    res.status(200).sendFile(__dirname + '/index.html')
})
app.post('/registro-exitoso', (req, res) => {
    const nombre = req.body.name
    const apellido = req.body.lastname
    const correo = req.body.email
    res.status(200).send(`Hola, ${nombre} ${apellido}! Te registraste en nuestra app con el correo ${correo} `)
})

//Ejercicio
// Crear una aplicacion de inicio de sesion que sea un formulario
// Si el usuario es desarrollador y la clave es backend1234
// Mandar a un html de bienvenida que diga Bienvenido desarrollador!
// opcional
// En cualquier otro caso que las credenciales sean distintas
// Enviar Bienvenido a la app. no tienes permisos de desarrollador

app.get('/inicioSesion', (req, res) =>{
    res.status(200).sendFile(__dirname + '/inicio-sesion.html')
})

app.post('/bienvenido', (req, res) =>{
    const usuario = req.body.usser
    const contrasenia = req.body.pass
    if(usuario=='desarrollador' && contrasenia=='backend1234'){
        res.status(200).sendFile(__dirname + '/bienvenido.html')
    } else{
        res.status(200).send(`Bienvenido ${usuario} a la app. No tienes permisos de desarrollador`)
    }
})

app.get('/error', (req, res) =>{
    //El estado 500 son errores internos en el servidor (programción que no esta funcionando)
    res.status(500).send('Error interno en el servidor. Intentelo más tarde')
})

app.get('*', (req, res) =>{
    //El 404 es que no encontró algun recurso
    res.status(404).send('Pagina no encontrada :(')
})

app.listen(3000, () =>{
    console.log('El servidor se esta ejecutando en http://localhost:3000')
})