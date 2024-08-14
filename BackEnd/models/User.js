const mongoose = require("mongoose")
const Schema = mongoose.Schema

const Admin = new Schema({
    AdminName : {
        type:String,
        required:true
    },
    Email : {
        type:String,
        required:true
    },
    Password : {
        type:String,
        required:true
    },
    Number : {
        type:String,
        required:true
    },
},
{
    collection:'Admin'
}
)
module.exports = mongoose.model("Admin",Admin)