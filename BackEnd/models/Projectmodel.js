const mongoose = require("mongoose")
const Schema = mongoose.Schema

const Project = new Schema({
    projectName : {
        type:String,
        // required:true
    },
    category : {
        type:mongoose.Schema.Types.ObjectId,
        ref:'Category',
        // required:true
    },
    projectDetails : {
        type:String,
    },
    technologies : [
        {
         type:mongoose.Schema.Types.ObjectId,
         ref:'Technology',
        //  required:true
        }
    ],
    industry:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'Industry',
        // required:true
    },
    country:{
        type:String,
    },
    startDate:{
        type:String
    },
    endDate:{
        type:String
    },
    image:[{
        type:String
    }]
},
{
    collection:'Project'
}
)
module.exports = mongoose.model("Project",Project)