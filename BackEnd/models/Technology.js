const mongoose = require("mongoose");
const Schema = mongoose.Schema

const Technology = new Schema({
    TechnologyName : {
        type:String,
        required:true
    }
},
{
    collection:"Technology"
}
)
module.exports = mongoose.model("Technology",Technology)