const express = require('express')

const router = express.Router()
const ProductController = require('../controllers/productController')
const { authentication } = require('../middleware/authentication')

router.post('/newProduct',ProductController.createProduct),
router.put('/updateProduct/:id',authentication,ProductController.updateProduct),
router.delete('/deleteProduct/:id',authentication,ProductController.deleteProduct),
router.get('/productWithCategory/:id',ProductController.productWithCategory),
router.get('/productById/:id',ProductController.productById)
router.get('/getAllProducts',ProductController.getAllProducts)
router.get('/productByName/:name',ProductController.productByName)
router.get('/productByPrice/:price',ProductController.productByPrice)
router.get('/productByPriceOrdered',ProductController.productsByPriceHightoShort)

module.exports=router