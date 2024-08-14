const Technology = require("../models/Technology")


const createtechnology = async(body) => {
    try {
        const data = await Technology.create(body)
         return data
    } catch (error) {
        console.log(error);
        
    }
 }

 const gettechnoById = async(id) => {
    try {
        console.log("ID",id);
        const data = await Technology.findById(id)
        console.log("Data",data);
        return data
    } catch (error) {
        console.log(error);
        
    }
 }

 const getalltechno = async() => {
    try {
        const data = await Technology.find();
        console.log("Data",data);
        return data
    } catch (error) {
        console.log(error);
        
    }
 }

 const updatetechno = async(id,body) => {
    try {
        const data = await Technology.findByIdAndUpdate(id,body,{new:true})
        console.log(data);
        return data
    } catch (error) {
        console.log(error);
     }
 }

 const deletetechno = async(id) => {
    try {
        const data = await Technology.findByIdAndDelete(id)
        return data
    } catch (error) {
        console.log(error);
    }
 }

 const deletemanytechno = async(id) => {
    try {
        let data = await Technology.deleteMany({
            _id:{ $in : id.map((i) => new mongoose.Types.ObjectId(i))},
        })
        return id
    } catch (error) {
        console.log(error);
    }
 }


 module.exports = {
    createtechnology,gettechnoById,getalltechno,updatetechno,deletetechno,deletemanytechno
 }