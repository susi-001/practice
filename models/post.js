const mongoose=require("mongoose");
const postschema=new mongoose.Schema({
    title:String,
    content:String
});
module.export=mongoose.model("post",postschema)