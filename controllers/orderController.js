const { Order,Orderproduct,Product  } = require('../models/index')

const orderController = {
    async newOrder(req, res) {
        try {
            const newOrder = await Order.create({...req.body,UserId:req.user.id})
            newOrder.addProduct(req.body.ProductId)
            res.status(201).send({ msg: "Pedido realizado con éxito", newOrder });
        } catch (error) {
            res.status(500).send(error);
        }
    },
    async orderAndProducts(req, res) {
        try {
          const orderAndProducts = await Order.findAll({
            include: [
              {
                model: Product,
                through: {
                  model: Orderproduct,
                },
                attributes: ['name', 'price']
              }
            ],
            where:{
              userId:req.user.id
            }
          });
          res.status(201).send({ msg: 'Mostrando pedido con productos', orderAndProducts });
        } catch (error) {
          res.status(500).send(error);
        }
}
}
module.exports=orderController

//roadmap.sh/backends