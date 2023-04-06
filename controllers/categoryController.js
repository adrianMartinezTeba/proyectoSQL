const { Category,Product,Sequelize} = require('../models/index')
const {Op}=Sequelize
const categoryController = {
    async createCategory(req, res) {
        try {
            const newCategory = await Category.create(req.body)
            res.status(201).send({ msg: "Producto creado con éxito", newCategory });
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
            res.send("Categoria actualizado con éxito",categoryUpdated);
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
            res.send({msg:'Categoria borrada correctamente'})
        } catch (error) {
            res.status(500).send(error);
        }
    },
    async categoryWithProducts(req,res){
        try {
            const categoryWithProducts = await Category.findAll({
                include:[{model:Product,attribute:['name']}]
            })
            res.send({msg:'Mostrando categoria con sus productos',categoryWithProducts})
        } catch (error) {
            res.status(500).send(error);
        }
    },async getAllCategories(req, res) {
        try {
            const getAllCategories = Category.get(req.body)
            res.send({ msg: 'mostrando todas las categorias', getAllCategories })
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
            res.send({msg:'Categoria mostrandose correctamente',catById})
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
            res.send({msg:'Categoria mostrandose correctamente',catByName})
        
        } catch (error) {
            res.status(500).send(error);
        }
}}
module.exports = categoryController