const express=require("express")
const router=express.Router()
const post=require("../models/post")
router.get("/",async(req,res)=>{
    const post=await post.find();
    res.send(post);
})
router.post("/",async(req,res)=>{
    const newpost=new post(req.body);
    await newpost.save();
    res.json(newpost);
})
module.exports=router
