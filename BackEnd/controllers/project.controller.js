const ProjectService = require("../service/project.service")

const Createproject = async(req,res) => {
    try {
        // Extract data from request body
        const { projectName, category, projectDetails, technologies, industry, country, startDate, endDate } = req.body;
        
        // Handle file uploads
        const images = req.files.map(file => file.path); // Save image paths

        // Prepare the data object
        const projectData = {
            projectName,
            category,
            projectDetails,
            technologies,
            industry,
            country,
            startDate,
            endDate,
            image: images
        };

        // Call the service to create the project
        const data = await ProjectService.createproject(projectData);

        // Respond with success
        res.status(201).send({ success: true, message: "Project Saved successfully", data });
    } catch (error) {
        console.log(error);
        res.status(500).send({ success: false, message: "Something went wrong" });
    }
};


const getProjectById = async(req,res) => {
    try {
        const {id} = req.params
        const data = await ProjectService.getprojectById(id)
        res.status(201).send({success:true,message:"Get project",data})
    } catch (error) {
        console.log(error);
        res.status(404).send({success:false,message:"Something went wrong"})
    }
}

const getallProject = async(req,res) => {
    try {
        const data = await ProjectService.getallproject();
        res.status(201).send({success:true,message:"Get all project",data})
    } catch (error) {
        console.log(error);
        res.status(404).send({success:false,message:"Something went wrong"})
    }
}

const UpdateProject = async(req,res) => {
    try {
        const {id} = req.params
        const data = await ProjectService.updateproject(id,req.body)
        res.status(201).send({success:true,message:"Update project",data})
    } catch (error) {
        console.log(error);
        res.status(404).send({success:false,message:"Something went wrong"})
    }
}

const deleteProject = async(req,res) => {
    try {
        const {id} = req.params
        const data = await ProjectService.deleteproject(id)
        res.status(201).send({success:true,message:"Delete project",data})
    } catch (error) {
        console.log(error);
        res.status(404).send({success:false,message:"Something went wrong"})
    }
}

const deleteManyProject = async(req,res) => {
    try {
        const data = await ProjectService.deletemanyproject(req.body.id)
        res.status(201).send({success:true,message:"Delete project",data})
    } catch (error) {
        console.log(error);
        res.status(404).send({success:false,message:"Something went wrong"})
    }
}

 

module.exports = {
    Createproject,getProjectById,getallProject,UpdateProject,deleteProject,deleteManyProject
}