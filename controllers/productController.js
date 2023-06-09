const { Product, Category, Sequelize } = require('../models/index')
const { Op } = Sequelize

const ProductController = {
    async createProduct(req, res) {
        try {
            const newProduct = await Product.create(req.body)
            res.status(201).send({ msg: "Producto creado con éxito", newProduct });
        } catch (error) {
            res.status(500).send(error);
        }
    },
    async updateProduct(req, res) {
        try {
           const productUpdated = await Product.update(req.body, {
                where: {
                    id: req.params.id,
                },
            });
            res.status(201).send({msg:"Producto actualizado con éxito",productUpdated});
        } catch (error) {
            res.status(500).send(error);
        }
    },
    async deleteProduct(req, res) {
        try {
            await Product.destroy({
                where: {
                    id: req.params.id
                }
            });
            res.status(201).send({ msg: 'Producto eliminado con exito' })
        } catch (error) {
            res.status(500).send(error);
        }
    },
    async productWithCategory(req, res) {
        try {
          const productWithCategory = await Product.findByPk(req.params.id, {
            include: { model: Category, attributes: ['name'] },
          });
          res.status(200).send({ msg: 'Mostrando producto con su categoría', productWithCategory });
        } catch (error) {
          res.status(500).send(error);
        }
      },
    async getAllProducts(req, res) {
        try {
            const getAllProducts = await Product.findAll()
            res.status(201).send({ msg: 'mostrando todos los productos', getAllProducts })
        } catch (error) {
            res.status(500).send(error);
        }
    },
    async productById(req, res) {
        try {
            const productById = await Product.findOne({
                where: { id: req.params.id }
            })
            res.status(201).send({ msg: 'mostrando el producto por id', productById })
        } catch (error) {
            res.status(500).send(error);
        }
    },
    async productByName(req, res) {
        try {
            const productByName = await Product.findOne({
                where: {
                    name: {
                        [Op.like]: `%${req.params.name}%`,
                    },
                }
            })
            res.status(201).send({ msg: 'Mostrando producto por nombre', productByName })
        } catch (error) {
            res.status(500).send(error);
        }
    },
    async productByPrice(req, res) {
        try {
            const productByPrice = await Product.findOne({
                where: {
                    price: req.params.price
                }
            });
            res.status(201).send({ msg: 'Producto encontrado', productByPrice })
        } catch (error) {
            res.status(500).send(error);
        }
    },
    async  productsByPriceHightoShort(req, res) {
        try {
          const productsByPriceHightoShort = await Product.findAll({
            order: [['price', 'DESC']]
          });
          res.status(201).send({ msg: 'Productos encontrados', productsByPriceHightoShort });
        } catch (error) {
          res.status(500).send(error);
        }
      }
}
module.exports = ProductController