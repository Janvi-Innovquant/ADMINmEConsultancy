const TechnologyService = require("../service/technology.service")

const Createtechnology = async(req,res) => {
    try {
        const data = await TechnologyService.createtechnology(req.body)
        res.status(201).send({success:true,message:"Technology Saved successfully",data})
    } catch (error) {
        console.log(error);
        res.status(404).send({success:false,message:"Something went wrong"})
    }
}

const getTechnoById = async(req,res) => {
    try {
        const {id} = req.params
        const data = await TechnologyService.gettechnoById(id)
        res.status(201).send({success:true,message:"Get Technology",data})
    } catch (error) {
        console.log(error);
        res.status(404).send({success:false,message:"Something went wrong"})
    }
}

const getallTechno = async(req,res) => {
    try {
        const data = await TechnologyService.getalltechno();
        res.status(201).send({success:true,message:"Get all technology",data})
    } catch (error) {
        console.log(error);
        res.status(404).send({success:false,message:"Something went wrong"})
    }
}

const UpdateTechno = async(req,res) => {
    try {
        const {id} = req.params
        const data = await TechnologyService.updatetechno(id,req.body)
        res.status(201).send({success:true,message:"Update project",data})
    } catch (error) {
        console.log(error);
        res.status(404).send({success:false,message:"Something went wrong"})
    }
}

const deleteTechno = async(req,res) => {
    try {
        const {id} = req.params
        const data = await TechnologyService.deletetechno(id)
        res.status(201).send({success:true,message:"Delete technology",data})
    } catch (error) {
        console.log(error);
        res.status(404).send({success:false,message:"Something went wrong"})
    }
}

const deleteManyTechno = async(req,res) => {
    try {
        const data = await TechnologyService.deletemanytechno(req.body.id)
        res.status(201).send({success:true,message:"Delete technology",data})
    } catch (error) {
        console.log(error);
        res.status(404).send({success:false,message:"Something went wrong"})
    }
}


module.exports = {
    Createtechnology,getTechnoById,getallTechno,UpdateTechno,deleteTechno,deleteManyTechno
}