const UserModel = require("../models/UserModel");
const bcrypt = require("bcrypt");
const ApiError = require("../errors/ApiError");

class UserController {
  async registration(req, res, next) {
    try {
      const { name, email, password, role } = req.body;
      if (!name) {
        return res.json({ error: "Введіть імя" });
      }
      if (!email || !password) {
        return res.json({ error: "Неккоректний email або password" });
      }
      if (!role) {
        return res.json({ error: "Не вибрана роль" });
      }
      const candidate = await UserModel.findOne({ where: { email } });
      if (candidate) {
        return res.json({ error: "Пользователь с таким email уже существует" });
      }
      const hashPassword = await bcrypt.hash(password, 5);
      const userData = await UserModel.create({
        name: name,
        email: email,
        password: hashPassword,
        role: role
      });
      return res.json({ user: userData });
    } catch (e) {
      console.log(e);
    }
  }

  async login(req, res, next) {
    try {
      const { email, password } = req.body;
      const userData = await UserModel.findOne({ where: { email } });
      if (!userData) {
        return res.json({ error: "Користувача з таким Email не знайденно" });
      }
      let comparePassword = bcrypt.compareSync(password, userData.password);
      if (!comparePassword) {
        return res.json({ error: "Невірний пароль" });
      }
      return res.json({ user: userData });
    } catch (e) {
      console.log(e);
    }
  }

  async changeName(req, res) {
    try {
      const { id, newName } = req.body;
      const userData = await UserModel.findOne({ where: { id } });
      userData.name = newName;
      await userData.save();
      res.json(userData);
    } catch (e) {
      console.log(e);
    }
  }

  async changeEmail(req, res) {
    try {
      const { id, newEmail } = req.body;
      const userData = await UserModel.findOne({ where: { id } });
      userData.email = newEmail;
      await userData.save();
      res.json(userData);
    } catch (e) {
      console.log(e);
    }
  }

  async changePassword(req, res) {
    try {
      const { id, newPassword } = req.body;
      const userData = await UserModel.findOne({ where: { id } });
      const hashPassword = await bcrypt.hash(newPassword, 5);
      userData.password = hashPassword;
      await userData.save();
      res.json(userData);
    } catch (e) {
      console.log(e);
    }
  }
}

module.exports = new UserController();
