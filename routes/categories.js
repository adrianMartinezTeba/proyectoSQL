const express = require('express')
const categoryController = require('../controllers/categoryController')

const router = express.Router()

router.post('/newCategory',categoryController.createCategory)
router.put('/updateCategory/:id',categoryController.updateCategory)
router.delete('/delete/:id',categoryController.deleteCategory)
router.get('/getAllCategories',categoryController.getAllCategories)
router.get('/categoryWithProducts',categoryController.categoryWithProducts)//no me sale
router.get('/byId/:id',categoryController.categoryById)
router.get('/byName/:name',categoryController.categoryByName)

module.exports=router