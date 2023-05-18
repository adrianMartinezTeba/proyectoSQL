const express = require('express')
const UserController = require('../controllers/userController')
const router = express.Router()
const {authentication}=require('../middleware/authentication')

router.post('/createUser',UserController.createUser)
router.post('/login',UserController.login)
router.get('/userOrders',authentication,UserController.userOrders)//no me sale y no se pq
router.delete ('/logout',authentication,UserController.logout)
router.get('/allUsers',UserController.allUsers)
router.get('/user',UserController.findUserByToken)
module.exports=router