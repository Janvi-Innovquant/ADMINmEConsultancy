const CategoryService = require("../service/category.service")

const Createcategory = async(req,res) => {
    try {
        const data = await CategoryService.createcategory(req.body)
        res.status(201).send({success:true,message:"Category Saved successfully",data})
    } catch (error) {
        console.log(error);
        res.status(404).send({success:false,message:"Something went wrong"})
    }
}

const getCategoryById = async(req,res) => {
    try {
        const {id} = req.params
        const data = await CategoryService.getcategoryById(id)
        res.status(201).send({success:true,message:"Get category",data})
    } catch (error) {
        console.log(error);
        res.status(404).send({success:false,message:"Something went wrong"})
    }
}

const getallCategory = async(req,res) => {
    try {
        const data = await CategoryService.getallcategory();
        res.status(201).send({success:true,message:"Get all category",data})
    } catch (error) {
        console.log(error);
        res.status(404).send({success:false,message:"Something went wrong"})
    }
}

const UpdateCategory = async(req,res) => {
    try {
        const {id} = req.params
        const data = await CategoryService.updatecategory(id,req.body)
        res.status(201).send({success:true,message:"Update category",data})
    } catch (error) {
        console.log(error);
        res.status(404).send({success:false,message:"Something went wrong"})
    }
}

const deleteCategory = async(req,res) => {
    try {
        const {id} = req.params
        const data = await CategoryService.deletecategory(id)
        res.status(201).send({success:true,message:"Delete category",data})
    } catch (error) {
        console.log(error);
        res.status(404).send({success:false,message:"Something went wrong"})
    }
}

const deleteManyCategory = async(req,res) => {
    try {
        console.log("HiiDelete");
        const data = await CategoryService.deletemanycategory(req.body.id)
        res.status(201).send({success:true,message:"Delete category",data})
    } catch (error) {
        console.log(error);
        res.status(404).send({success:false,message:"Something went wrong"})
    }
}


module.exports = {
    Createcategory,getCategoryById,getallCategory,UpdateCategory,deleteCategory,deleteManyCategory
}