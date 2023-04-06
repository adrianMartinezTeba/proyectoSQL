const express = require('express')
const router = express.Router()
const ProductController = require('../controllers/productController')

router.post('/newProduct',ProductController.createProduct),
router.put('/updateProduct',ProductController.updateProduct),
router.delete('/deleteProduct',ProductController.deleteProduct),
router.get('/productWithCategory',ProductController.productWithCategory),
router.get('/productById/:id',ProductController.productById)
router.get('/getAllProducts',ProductController.getAllProducts)
router.get('/productByName/:name',ProductController.productByName)
router.get('/productByPrice/:price',ProductController.productByPrice)
router.get('/productByPriceOrdered',ProductController.productsByPriceHightoShort)

module.exports=router