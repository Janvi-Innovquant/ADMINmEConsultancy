const express = require("express")
const app = express();
const cors = require("cors");
const mongoose = require("mongoose")
require("dotenv/config");
const port = process.env.PORT || 3000
const SwaggerOption = require("./swagger")
const swaggerjsDoc = require("swagger-jsdoc")
const swaggerUi = require("swagger-ui-express")
const ProjectRoute = require("./routes/project")
const CategoryRoute = require("./routes/category")
const TechnologyRoute = require("./routes/technology")
const IndustryRoute = require("./routes/industry")
const UserRoute = require("./routes/user")
const route = require("./routes/index")

const connectDB = async() => {
       try {
        await mongoose.connect(process.env.MONGO_URL)
        console.log("Mongodb is connected");
       } catch (error) {
        console.log(error);
    }
}
connectDB();

app.use(cors());

app.get("/swagger",(req,res)=>{
    res.setHeader("Content-type","application/json")
    res.send(swaggerjsDoc(SwaggerOption))
})

app.use("/enterswagger",swaggerUi.serve,swaggerUi.setup(swaggerjsDoc(SwaggerOption)))

app.use(express.json({limit:"50mb"}))
app.use(express.urlencoded({extended:true}))
app.use("/api",route)
app.use("/project",ProjectRoute)
app.use("/category",CategoryRoute)
app.use("/technology",TechnologyRoute)
app.use("/industry",IndustryRoute)
app.use("/admin",UserRoute)
// app.use("/user",UserRoute)

app.listen(port,()=>{
    console.log(`Server running on port ${port}`);
    
})