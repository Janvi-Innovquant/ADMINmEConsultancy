const { required } = require("joi");
const mongoose = require("mongoose");
const Schema = mongoose.Schema

const Industry = new Schema({
    IndustryName : {
        type:String,
        required:true
    }
},
{
    collection:"Industry"
}
)
module.exports = mongoose.model("Industry",Industry)