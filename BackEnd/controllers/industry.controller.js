const IndustryService = require("../service/industry.service")


const Createindustry = async(req,res) => {
    try {
        const data = await IndustryService.createindustry(req.body)
        res.status(201).send({success:true,message:" Industry Saved successfully",data})
    } catch (error) {
        console.log(error);
        res.status(404).send({success:false,message:"Something went wrong"})
    }
}

const getIndustryById = async(req,res) => {
    try {
        const {id} = req.params
        const data = await IndustryService.getIndustryById(id)
        res.status(201).send({success:true,message:"Get Industry",data})
    } catch (error) {
        console.log(error);
        res.status(404).send({success:false,message:"Something went wrong"})
    }
}

const getallIndustry = async(req,res) => {
    try {
        const data = await IndustryService.getallIndustry();
        res.status(201).send({success:true,message:"Get all Industry",data})
    } catch (error) {
        console.log(error);
        res.status(404).send({success:false,message:"Something went wrong"})
    }
}

const UpdateIndustry = async(req,res) => {
    try {
        const {id} = req.params
        const data = await IndustryService.updateIndustry(id,req.body)
        res.status(201).send({success:true,message:"Update Industry",data})
    } catch (error) {
        console.log(error);
        res.status(404).send({success:false,message:"Something went wrong"})
    }
}

const deleteIndustry = async(req,res) => {
    try {
        const {id} = req.params
        const data = await IndustryService.deleteIndustry(id)
        res.status(201).send({success:true,message:"Delete Industry",data})
    } catch (error) {
        console.log(error);
        res.status(404).send({success:false,message:"Something went wrong"})
    }
}

const deleteManyIndustry = async(req,res) => {
    try {
        const data = await IndustryService.deletemanyIndustry(req.body.id)
        res.status(201).send({success:true,message:"Delete Industry",data})
    } catch (error) {
        console.log(error);
        res.status(404).send({success:false,message:"Something went wrong"})
    }
}


module.exports = {
    Createindustry,getIndustryById,getallIndustry,UpdateIndustry,deleteIndustry,deleteManyIndustry
}