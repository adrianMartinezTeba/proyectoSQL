const { User, Token, Sequelize, Orderproduct, Order } = require('../models/index')
const { Op } = Sequelize
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
  async login(req, res) {
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
  async userOrders(req, res) {
    try {
      const userOrders = await User.findOne({
        where: {
        id: req.User.id
        },
        include:[{
          model:Order,
          include:[{
            model:Product,
            through:{attributes:[]}
          }]
        }]
      })
      res.send({ msg: 'mostrando todo correctamente', userOrders })
    } catch (error) {
      res.status(500).send(error);
    }
  },
  async logout(req, res) {
    try {
      await Token.destroy({
        where: {
          [Op.and]: [
            { UserId: req.user.id },
            { token: req.headers.authorization },
          ],
        },
      });
      res.send({ message: "Desconectado con éxito" });
    } catch (error) {
      console.log(error);
      res
        .status(500)
        .send({ message: "hubo un problema al tratar de desconectarte" });
    }
  },
}
module.exports = UserController