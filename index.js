const PORT = 8080
const express = require('express')
const app = express()
app.use(express.json())

app.use('/users',require('./routes/users.js'))
app.use('/orders',require('./routes/orders.js'))
app.use('/products',require('./routes/products.js'))
app.use('/categories',require('./routes/categories.js'))

    .listen(PORT,()=>console.log(`Servidor levantado correctamente en el puerto ${PORT}`))