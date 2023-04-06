const express = require('express')
const categoryController = require('../controllers/categoryController')

const router = express.Router()

router.post('/newCategory',categoryController.createCategory)
router.put('/updateCategory',categoryController.updateCategory)
router.get('/getAllCategories',categoryController.getAllCategories)
router.get('/categoryWithProducts',categoryController.categoryWithProducts)
router.get('/byId/:id',categoryController.categoryById)
router.get('/byName/:name',categoryController.categoryByName)

module.exports=router