Proyecto de backend para tienda online
Este proyecto de backend consiste en el desarrollo de una API REST utilizando las tecnologías Node.js, Express, y MySQL/Sequelize para una tienda en línea (e-commerce). El objetivo del proyecto es crear un conjunto de endpoints para gestionar productos, categorías, usuarios y pedidos.

Descripción
El alumno deberá presentar y defender un diagrama que explique las relaciones entre las diferentes tablas de la base de datos. Una vez definido el esquema, se espera que el alumno desarrolle una API REST capaz de:

Registrar usuarios utilizando Bcrypt.
Autenticar usuarios con token y middleware.
Crear un CRUD.
Establecer al menos una relación many-to-many y otra one-to-many.
Utilizar seeders para cargar datos iniciales.
Requisitos
Uso de ramas con Git, creando al final del proyecto las ramas "main" y "develop".
Excelente presentación de un README completo.
Tecnologías
Se utilizará MySQL con Sequelize y Express para desarrollar la API. El proyecto se subirá a un repositorio público en GitHub y se valorará la existencia de ramas, así como commits legibles de alta calidad para analizar la evolución del proyecto. Además, será requisito indispensable que el repositorio disponga de un README completo.

Endpoints
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
Implementación de validación al crear un producto para que se rellenen todos los campos y, si no se hace, devuelva un mensaje.
Sólo se podrán crear, actualizar y eliminar productos si el usuario está autenticado.
Categorías
CRUD de categorías
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
```
Endpoint que traiga todas las categorías junto con los productos que tienen
Endpoint que traiga una categoría por su id
Filtro para buscar categorías por nombre
Pedidos
Endpoint que traiga los pedidos junto con los productos que tienen
Endpoint para crear pedidos
Usuarios
Endpoint para registrar un usuario utilizando Bcrypt
Endpoint para login (utilizando Bcrypt + JWT)
Endpoint que traiga la información del usuario conectado junto con los pedidos que tiene y los productos que contiene cada pedido
Endpoint para el logout
Implementación de validación al crear un usuario para que se rellenen todos los campos y, si no se hace, devuelva un mensaje.
Seeders
Seeder para crear 5 productos.
Autor
Nombre: [Nombre del alumno]

Correo electrónico: [Correo electrónico del alumno]
