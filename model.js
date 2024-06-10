const mongoose = require("mongoose")

mongoose.connect("mongodb+srv://anjalpsalim2004:anjal@cluster0.kfe7gl9.mongodb.net/gptc_mern?retryWrites=true&w=majority&appName=Cluster0")
.then(()=>{
    console.log("db connected")
   
})
.catch(err=>console.log(err))
let mongoschema = mongoose.Schema
const SignupSchema = new mongoschema({
    ename:String,
    elname:String,
    email:String,
    epass:String
})

var Signup = mongoose.model("Signup",SignupSchema)
module.exports = Signup