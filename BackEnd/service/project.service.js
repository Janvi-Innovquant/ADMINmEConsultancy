const { default: mongoose } = require("mongoose");
const Project = require("../models/Projectmodel")

const createproject = async(body) => {
    try {
        const data = await Project.create(body)
         return data
    } catch (error) {
        console.log(error);
        
    }
 }

 const getprojectById = async(id) => {
    try {
        console.log("ID",id);
        const data = await Project.findById(id).populate('category').populate('technologies').populate('industry')
        console.log("Data",data);
        return data
    } catch (error) {
        console.log(error);
        
    }
 }

 const getallproject = async() => {
    try {
        const data = await Project.find();
        console.log("Data",data);
        return data
    } catch (error) {
        console.log(error);
        
    }
 }

 const updateproject = async(id,body) => {
    try {
        const data = await Project.findByIdAndUpdate(id,body,{new:true})
        console.log(data);
        return data
    } catch (error) {
        console.log(error);
     }
 }

 const deleteproject = async(id) => {
    try {
        const data = await Project.findByIdAndDelete(id)
        return data
    } catch (error) {
        console.log(error);
    }
 }

 const deletemanyproject = async(id) => {
    try {
        let data = await Project.deleteMany({
            _id:{ $in : id.map((i) => new mongoose.Types.ObjectId(i))},
        })
        return id
    } catch (error) {
        console.log(error);
    }
 }

module.exports = {
    createproject,getprojectById,getallproject,updateproject,deleteproject,deletemanyproject
}