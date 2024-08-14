const express = require('express')
const route = express.Router();

const Usercontroller = require("../controllers/user.controller")

 route.post("/adminlogin",Usercontroller.AdminLogin)
 route.post("/createadmin",Usercontroller.CreateAdmin)


module.exports = route