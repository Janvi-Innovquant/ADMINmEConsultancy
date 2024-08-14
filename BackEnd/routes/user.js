const express = require('express')
const route = express.Router();

const Usercontroller = require("../controllers/user.controller")

route.post("/createUser",Usercontroller.CreateUser)

module.exports = route