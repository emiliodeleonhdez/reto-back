const { request, response } = require("express");
const express = require("express");
const post = require("../usecases/posts");
const router = express.Router();

router.post("/", async (req,res,next)=>{
    try{
        const newPost = await post.create(req.body)
        res.status(201).json({
            ok:true,
            message:"Post Created",
            payload:newPost,
        })
    }catch(err){
        next(err)
    }
})

module.exports = router 