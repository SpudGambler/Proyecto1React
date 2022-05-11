const UserModel = require("../models/user.model");
const Boom = require("@hapi/boom");

class UserService {
  /* Promesas y funciones asincronicas
  Una funcion asincronica devuelve una promesa
  JS es un lenguaje subproceso (que solo ejecuta un hilo) -> solo hace una cosa a la vez */

  async createUser(user) {
    user.save();
    return user;
  }

  async listUsers() {
    return UserModel.find();
  }

  async showUser(userId) {
    return UserModel.findById({ _id: userId }).then((userFind) => {
      if (!userFind) throw Boom.notFound("No se encontró el usuario");
      return userFind;
    });
  }

  async editUser(userId, name, lastname, email, password, active, role) {
    return UserModel.findByIdAndUpdate(
      { _id: userId },
      { name, lastname, email, password, active, role }
    ).then((userFind) => {
      if (!userFind) throw Boom.notFound("No se encontró el usuario");
    });
  }

  async removeUser(userId) {
    return UserModel.findById({ _id: userId }).then((userFind) => {
      if (!userFind) throw Boom.notFound("No se encontró el usuario");
      return UserModel.deleteOne(userFind);
    });
  }
}

module.exports = UserService;
