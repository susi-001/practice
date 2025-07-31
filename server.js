const express=require("express")
const mongoose=require("mongoose");
const cors=require("cors");
const postroutes=require("./routes/postroutes");
const app=express();
app.use(cors());
app.use(express.json);
mongoose.connect("mongodb://localhost:27017/mernblog").then(()=>{
    console.log("connected")
}).catch(err=>console.error(err))
app.use("/post",postroutes);
app.listen(5000,()=>{
    console.log("server is running on 5000")
})