const { Order,Orderproduct  } = require('../models/index')

const orderController = {
    async newOrder(req, res) {
        try {
            const newOrder = await Order.create(req.body)
            newOrder.addProduct(req.body.ProductId)
            res.status(201).send({ msg: "Pedido realizado con éxito", newOrder });
        } catch (error) {
            res.status(500).send(error);
        }
    },
     async orderAndProducts(req,res){
        try {
            const orderAndProducts = await Orderproduct.findAll(req.body)
            res.send({msg:'Pedido con productos mostrandose',orderAndProducts})
        } catch (error) {
            res.status(500).send(error);
        }
    }
}

module.exports=orderController

//roadmap.sh/backends