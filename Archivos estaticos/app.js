const express = require('express')
const app = express()

// Para configurar los archivos estaticos vamos a utilizar un metodo de express
// llamado static
app.use(express.static('public'))

app.get('/', (req, res) => {
    res.status(200).sendFile(__dirname + '/index.html')
})

app.listen(3000, () => {
    console.log('La aplicación se esta ejecutando en http://localhost:3000')
})