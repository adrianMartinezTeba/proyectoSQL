const express = require('express')
const UserController = require('../controllers/UserController')
const router = express.Router()

router.post('/createUser',UserController.createUser)
router.post('/login',UserController.login)

module.exports=router