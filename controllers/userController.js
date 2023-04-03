const { User, } = require('../models/index')
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

    }
}
module.exports= UserController