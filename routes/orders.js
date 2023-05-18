const express = require('express')
const orderController = require('../controllers/orderController')
const { authentication } = require('../middleware/authentication')
const router = express.Router()


router.post('/newOrder',authentication,orderController.newOrder)
router.get('/orderWithProducts',authentication,orderController.orderAndProducts)//no me sale 
module.exports=router