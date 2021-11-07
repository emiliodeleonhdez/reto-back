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

router.get("/:userId", async (req, res, next) => { 
    const {userId}=req.params

    try {

    const postById = await post.getById(userId)    
    res.status(200).json({ 

        ok:true,
        payload:postById,

    }); 

    }

    catch(err){
        next()
        }
  });

module.exports = router 