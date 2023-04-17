const express = require('express')
const UserController = require('../controllers/UserController')
const router = express.Router()
const {authentication}=require('../middleware/authentication')

router.post('/createUser',UserController.createUser)
router.post('/login',UserController.login)
router.get('/userOrders',authentication,UserController.userOrders)
router.delete ('/logout',authentication,UserController.logout)

module.exports=router