const Category = require("../models/Category")

const createcategory = async(body) => {
    try {
        const data = await Category.create(body)
         return data
    } catch (error) {
        console.log(error);
        
    }
 }

 const getcategoryById = async(id) => {
    try {
        console.log("ID",id);
        const data = await Category.findById(id)
        console.log("Data",data);
        return data
    } catch (error) {
        console.log(error);
        
    }
 }

 const getallcategory = async() => {
    try {
        const data = await Category.find();
        console.log("Data",data);
        return data
    } catch (error) {
        console.log(error);
        
    }
 }

 const updatecategory = async(id,body) => {
    try {
        const data = await Category.findByIdAndUpdate(id,body,{new:true})
        console.log(data);
        return data
    } catch (error) {
        console.log(error);
     }
 }

 const deletecategory = async(id) => {
    try {
        const data = await Category.findByIdAndDelete(id)
        return data
    } catch (error) {
        console.log(error);
    }
 }

 const deletemanycategory = async(id) => {
    try {
        let data = await Category.deleteMany({
            _id:{ $in : id.map((i) => new mongoose.Types.ObjectId(i))},
        })
        return id
    } catch (error) {
        console.log(error);
    }
 }


 module.exports = {
    createcategory,getcategoryById,getallcategory,updatecategory,deletecategory,deletemanycategory
 }