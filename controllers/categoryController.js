const { Category,Product,Sequelize} = require('../models/index')
const {Op}=Sequelize
const categoryController = {
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
            res.status(201).send({msg:"Categoria actualizado con éxito",categoryUpdated});
        } catch (error) {
            res.status(500).send(error);
        }
    },
    async deleteCategory(req,res){
        try {
            const deleteCate = await Category.destroy({
                where:{
                    id:req.params.id
                }
            })
            res.status(201).send({msg:'Categoria borrada correctamente',deleteCate})
        } catch (error) {
            res.status(500).send(error);
        }
    },
    async categoryWithProducts(req,res){
        try {
            const categoryWithProducts = await Category.findAll({
                include:[{model:Product,attribute:['name']}]
            })
            res.status(201).send({msg:'Mostrando categoria con sus productos',categoryWithProducts})
        } catch (error) {
            res.status(500).send(error);
        }
    },async getAllCategories(req, res) {
        try {
            const getAllCategories = await Category.findAll()
            res.status(201).send({ msg: 'mostrando todas las categorias', getAllCategories })
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
            res.status(201).send({msg:'Categoria mostrandose correctamente',catById})
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
            res.status(201).send({msg:'Categoria mostrandose correctamente',catByName})
        
        } catch (error) {
            res.status(500).send(error);
        }
}}
module.exports = categoryController