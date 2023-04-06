const express = require('express')
const orderController = require('../controllers/orderController')
const router = express.Router()

//añadir autenticacion
router.post('/newOrder',orderController.newOrder)
router.get('/orderWithProducts',orderController.orderAndProducts)
module.exports=router