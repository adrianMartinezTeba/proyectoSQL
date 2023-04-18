Proyecto de backend para tienda online
Este proyecto de backend consiste en el desarrollo de una API REST utilizando las tecnologías Node.js, Express, y MySQL/Sequelize para una tienda en línea (e-commerce). El objetivo del proyecto es crear un conjunto de endpoints para gestionar productos, categorías, usuarios y pedidos.

Descripción
Se va a desarrollar una API REST capaz de:

Registrar usuarios utilizando Bcrypt.
Autenticar usuarios con token y middleware.
Crear un CRUD de cada una de las tablas.
Establecer al menos una relación many-to-many y otra one-to-many.
Utilizar seeders para cargar datos iniciales de los productos.

Tecnologías
Se utilizará NODE.js,MySQL con Sequelize y Express para desarrollar la API.En la que utilizaremos el sistema de MVC para organizar nuestro proyecto
Endpoints
Aqui voy a mostrar el codigo que se ha realizado para hacer los endpoints.

Productos
CRUD de productos
Endpoint para crear un producto
Endpoint para actualizar un producto
Endpoint para eliminar un producto
Endpoint que traiga los productos junto con la categoría o categorías a las que pertenecen
Endpoint que traiga un producto por su id
Filtro para buscar producto por nombre
Filtro para buscar producto por precio
Filtro que ordene los productos de mayor a menor precio

```javascript
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
            await Product.update(req.body, {
                where: {
                    id: req.params.id,
                },
            });
            res.status(201). res.send("Producto actualizado con éxito");
        } catch (error) {
            res.status(500).send(error);
        }
    },
    async deleteProduct(req, res) {
        try {
            await Product.destroy({
                where: {
                    ProductId: req.params.id
                }
            });
            res.status(201).res.send({ msg: 'Usuario eliminado con exito' })
        } catch (error) {
            res.status(500).send(error);
        }
    },
    async productWithCategory(req, res) {
        try {
            const productsWithCategory = await Product.findAll({
                include: [{ model: Category, attributes: ['name'] }]
            })
            res.status(201).res.send({ msg: 'Mostrando producto con su categoria', productsWithCategory })
        } catch (error) {
            res.status(500).send(error);
        }
    },
    async getAllProducts(req, res) {
        try {
            const getAllProducts = await Product.findAll(req.body)
            res.status(201).res.send({ msg: 'mostrando todos los productos', getAllProducts })
        } catch (error) {
            res.status(500).send(error);
        }
    },
    async productById(req, res) {
        try {
            const productById = await Product.findOne({
                where: { id: req.params.id }
            })
            res.status(201).res.send({ msg: 'mostrando el producto por id', productById })
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
            res.status(201).res.send({ msg: 'Mostrando producto por nombre', productByName })
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
            res.status(201).res.send({ msg: 'Producto encontrado', productByPrice })
        } catch (error) {
            res.status(500).send(error);
        }
    },
    async  productsByPriceHightoShort(req, res) {
        try {
          const productsByPriceHightoShort = await Product.findAll({
            order: [['price', 'DESC']]
          });
          res.status(201).res.send({ msg: 'Productos encontrados', productsByPriceHightoShort });
        } catch (error) {
          res.status(500).send(error);
        }
      }
```
Categorías
CRUD de categorías
Endpoint que traiga todas las categorías junto con los productos que tienen
Endpoint que traiga una categoría por su id
Filtro para buscar categorías por nombre
```javascript
 async createCategory(req, res) {
        try {
            const newCategory = await Category.create(req.body)
            res.status(201).send({ msg: "Categoria creada con éxito", newCategory });
        } catch (error) {
            res.status(500).send(error);
        }
    },
    async updateCategory(req, res) {
        try {
            const categoryUpdated = await Category.update(req.body, {
                where: {
                    id: req.params.id
                }
            })
            res.status(201).res.send("Categoria actualizado con éxito",categoryUpdated);
        } catch (error) {
            res.status(500).send(error);
        }
    },
    async deleteCategory(req,res){
        try {
            Category.destroy(req.body,{
                where:{
                    id:req.parms.id
                }
            })
            res.status(201).res.send({msg:'Categoria borrada correctamente'})
        } catch (error) {
            res.status(500).send(error);
        }
    },
    async categoryWithProducts(req,res){
        try {
            const categoryWithProducts = await Category.findAll({
                include:[{model:Product,attribute:['name']}]
            })
            res.status(201).res.send({msg:'Mostrando categoria con sus productos',categoryWithProducts})
        } catch (error) {
            res.status(500).send(error);
        }
    },async getAllCategories(req, res) {
        try {
            const getAllCategories = Category.get(req.body)
            res.status(201).res.send({ msg: 'mostrando todas las categorias', getAllCategories })
        } catch (error) {
            res.status(500).send(error);
        }

    },
    async categoryById(req,res){
        try {
            const catById = await Category.findOne({
                where:{
                    id:req.params.id
                }
            })
            res.status(201).res.send({msg:'Categoria mostrandose correctamente',catById})
        } catch (error) {
            res.status(500).send(error);
        }
    },
    async categoryByName(req,res){
        try {
            const catByName = await Category.findOne({
                where:{
                    name:{
                        [Op.like]: `%${req.params.name}%`
                    }
                }
            })
            res.status(201).res.send({msg:'Categoria mostrandose correctamente',catByName})
        
        } catch (error) {
            res.status(500).send(error);
        }
}
```

Pedidos
Endpoint que traiga los pedidos junto con los productos que tienen
Endpoint para crear pedidos
```javascript
  async newOrder(req, res) {
        try {
            const newOrder = await Order.create(req.body)
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
            ]
          });
          res.status(201).res.send({ msg: 'Mostrando pedido con productos', orderAndProducts });
        } catch (error) {
          res.status(500).send(error);
        }
}
```

Usuarios
Endpoint para registrar un usuario utilizando Bcrypt
Endpoint para login (utilizando Bcrypt + JWT)
Endpoint que traiga la información del usuario conectado junto con los pedidos que tiene y los productos que contiene cada pedido
Endpoint para el logout

Seeders
Seeder para crear 5 productos.
```javascript
      {
        price:100,
      name:'microondas',
      CategoryId:1,
      updatedAt:new Date(),
      createdAt:new Date()
      },
      {
        price:200,
        name:'lavavajillas',
        CategoryId:1,
        updatedAt:new Date(),
        createdAt:new Date()
      },
      {
        price:100,
        name:'sofa',
        CategoryId:2,
        updatedAt:new Date(),
        createdAt:new Date()
      },
      {
        price:100,
        name:'horno',
        CategoryId:1,
        updatedAt:new Date(),
        createdAt:new Date()
      },
      {
        price:100,
        name:'sillon',
        CategoryId:2,
        updatedAt:new Date(),
        createdAt:new Date()
      }
```

Autor
Nombre: Adrián Martínez Teba

Correo electrónico: adrymate@gmail.com
