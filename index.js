const PORT = 8080
const express = require('express')
const app = express()
app.use(express.json())

app.use('/users',require('./routes/users.js'))

    .listen(PORT,()=>console.log(`Servidor levantado correctamente en el puerto ${PORT}`))