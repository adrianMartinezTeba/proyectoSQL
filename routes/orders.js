const express = require('express')
const orderController = require('../controllers/orderController')
const router = express.Router()


router.post('/newOrder',orderController.newOrder)
router.get('/orderWithProducts',orderController.orderAndProducts)//no me sale 
module.exports=router