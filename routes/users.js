const express = require('express')
const UserController = require('../controllers/UserController')
const router = express.Router()

router.post('/createUser',UserController.createUser)

module.exports=router