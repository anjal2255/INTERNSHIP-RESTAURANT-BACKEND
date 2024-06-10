const mongoose = require("mongoose")

mongoose.connect("mongodb+srv://anjalpsalim2004:anjal@cluster0.kfe7gl9.mongodb.net/gptc_mern?retryWrites=true&w=majority&appName=Cluster0")
.then(()=>{
    console.log("db connected")
   
})
.catch(err=>console.log(err))
let mongoschema = mongoose.Schema
const FeedbackSchema = new mongoschema({
    efeedback:String,
})

var Feedback = mongoose.model("Feedback",FeedbackSchema)
module.exports = Feedback