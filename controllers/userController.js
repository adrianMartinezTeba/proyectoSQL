const { User,Token,Sequelize } = require('../models/index')
const {Op}=Sequelize
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')
const { jwt_secret } = require('../config/config.json')['development']

const UserController = {

    async createUser(req, res) {
        req.body.role = 'user'
        try {
            const password = await bcrypt.hash(req.body.password, 10)
            const bodyWithPasswordHashed = { ...req.body, password }
            const user = await User.create(bodyWithPasswordHashed)
            res.status(201).send({ msg: "Usuario creado con éxito", user });
        } catch (error) {
            console.error(error);
            res.send(error)
        }

    },
    async login(req,res){
        try {
            const user = await User.findOne({
              where: {
                email: req.body.email,
              },
            });
            if (!user) {
              return res
                .status(400)
                .send({ message: "Usuario o contraseña incorrectos" });
            }
            const isMatch = bcrypt.compareSync(req.body.password, user.password); //comparo contraseñas
            if (!isMatch) {
              return res
                .status(400)
                .send({ message: "Usuario o contraseña incorrectos" });
            }
            const token = jwt.sign({ id: user.id }, jwt_secret); // creo el token
            Token.create({ token, UserId: user.id });
            res.send({ token, message: "Bienvenid@ " + user.name, user });
          } catch (error) {
            console.log(error);
            res.status(500).send(error);
          }
        },
}
module.exports= UserController