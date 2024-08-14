const AdminService = require("../service/user.service")

 const AdminLogin = async(req,res) => {
   try {
      const data = await AdminService.adminLogin(req.body)
      res.status(200).send({success:true,message:"Admin Login successfully",data})
  } catch (error) {
      console.log(error);
      res.status(401).send({success:false,message: error.message || "Authentication failed"})
  }
 }

 const CreateAdmin = async(req,res) => {
   try {
      const data = await AdminService.createadmin(req.body)
      res.status(201).send({success:true,message:data.message,data:data.admin})
  } catch (error) {
      console.log(error);
      res.status(404).send({success:false,message: error.message || "Registration failed"})
  }
}

  const getUserById = async(req,res) => {
    try {
        
    } catch (error) {
        
    }
 }

 const getallUser = async(req,res) => {
    try {
        
    } catch (error) {
        
    }
 }

 const UpdateUser = async(req,res) => {
    try {
        
    } catch (error) {
        
    }
}

 const deleteUser = async(req,res) => {
    try {
        
    } catch (error) {
        
    }
}


module.exports = {
   AdminLogin,CreateAdmin,getUserById,getallUser,UpdateUser,deleteUser
}