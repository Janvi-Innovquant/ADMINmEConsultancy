const mongoose = require("mongoose");
const Schema = mongoose.Schema

const Category = new Schema({
    CategoryName : {
        type:String,
        required:true
    }
},
{
    collection:"Category"
}
)
module.exports = mongoose.model("Category",Category)