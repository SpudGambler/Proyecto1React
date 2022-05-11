const bcrypt = require("bcrypt-nodejs");
const User = require("../models/user.model");
const UserService = require("../services/user.service");
const service = new UserService();

function signUp(req, res) {
  const user = new User();
  const { name, lastname, email, password, repeatPassword } = req.body;
  user.name = name;
  user.lastname = lastname;
  user.email = email;
  user.role = "admin";
  user.active = true;
  /* Si no existe una de Las dos password */
  if (!password || !repeatPassword) {
    res.status(404).send({ message: "No coinciden" });
  } else {
    if (password == repeatPassword) {
      user.password = bcrypt.hashSync(password);
      console.log("Welcome");
      try {
        const data = service.createUser(user);
        res.status(201).json(data);
      } catch (error) {
        res.status(404).json({ message: error });
      }
    }
  }
}

module.exports = { signUp };
