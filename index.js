const PORT = 8080
const express = require('express')
const app = express()
app.use(express.json())


    .listen(PORT,()=>console.log(`Servidor levantado correctamente en el puerto ${PORT}`))