const Industry = require("../models/Industry")

const createindustry = async(body) => {
    try {
        const data = await Industry.create(body)
         return data
    } catch (error) {
        console.log(error);
        
    }
 }

 const getIndustryById = async(id) => {
    try {
        console.log("ID",id);
        const data = await Industry.findById(id)
        console.log("Data",data);
        return data
    } catch (error) {
        console.log(error);
        
    }
 }

 const getallIndustry = async() => {
    try {
        const data = await Industry.find();
        console.log("Data",data);
        return data
    } catch (error) {
        console.log(error);
        
    }
 }

 const updateIndustry = async(id,body) => {
    try {
        const data = await Industry.findByIdAndUpdate(id,body,{new:true})
        console.log(data);
        return data
    } catch (error) {
        console.log(error);
     }
 }

 const deleteIndustry = async(id) => {
    try {
        const data = await Industry.findByIdAndDelete(id)
        return data
    } catch (error) {
        console.log(error);
    }
 }

 const deletemanyIndustry = async(id) => {
    try {
        let data = await Industry.deleteMany({
            _id:{ $in : id.map((i) => new mongoose.Types.ObjectId(i))},
        })
        return id
    } catch (error) {
        console.log(error);
    }
 }


 module.exports = {
    createindustry,getIndustryById,getallIndustry,updateIndustry,deleteIndustry,deletemanyIndustry
 }