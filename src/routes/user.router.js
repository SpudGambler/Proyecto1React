const express = require("express");
const UserController = require("../controllers/user");

const UserRouter = express.Router();

UserRouter.post("/signup", UserController.signUp);

UserRouter.post("/signin", UserController.signIn);

module.exports = UserRouter;
