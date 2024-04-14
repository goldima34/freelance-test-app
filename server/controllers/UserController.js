const UserModel = require("../models/UserModel");
const bcrypt = require("bcrypt");
const ApiError = require("../errors/ApiError");

class UserController {
  async registration(req, res, next) {
    try {
      const { name, email, password, role } = req.body;
      if (!name) {
        return next(ApiError.badRequest("Введіть імя"));
      }
      if (!email || !password) {
        return next(ApiError.badRequest("Неккоректний email або password"));
      }
      if (!role) {
        return next(ApiError.badRequest("Не вибрана роль"));
      }
      const candidate = await UserModel.findOne({ where: { email } });
      if (candidate) {
        return next(
          ApiError.badRequest("Пользователь с таким email уже существует")
        );
      }
      const hashPassword = await bcrypt.hash(password, 5);
      const userData = await UserModel.create({
        name: name,
        email: email,
        password: hashPassword,
        role: role
      });
      return res.json(userData);
    } catch (e) {
      console.log(e);
    }
  }

  async login(req, res, next) {
    try {
       const {email, password} = req.body
        const userData = await UserModel.findOne({where: {email}})
        if (!userData) {
          return next(ApiError.internal("Користувача з таким Email не знайденно"));
        }
        let comparePassword = bcrypt.compareSync(password, userData.password);
        if (!comparePassword) {
            return next(ApiError.internal('Невірний пароль'))
        }
        return res.json(userData);
    } catch (e) {
      console.log(e);
    }
  }

  async changeName(req, res, next){
    const {email} = req.body
    const userData = await UserModel.findOne({where: {email}})
    
  }
}

module.exports = new UserController();
