const { request, response } = require("express");
const express = require("express");
const user = require("../usecases/users");
const router = express.Router();

router.post("/", async (req,res,next) =>{
    try{
        const newUser = await user.create(req.body)
        res.status(201).json({
            ok:true,
            message:"New User created",
            payload:newUser,
        })
    }catch(err){
        console.warn("Something aint right")
    }
})

router.get("/", async (req, res, next) => { 
    const getByUsername = await user.getByUsername(req.body.userName)

    try {
    res.status(200).json({ 
        ok:true,
        payload:getByUsername,

    }); 

    }

    catch(err){
        next()
        }
  });

  router.get("/:userId", async (req, res, next) => { 
    const {userId}=req.params

    try {

    const user= await user.getById(userId)    
    res.status(200).json({ 

        ok:true,
        payload:user,

    }); 

    }

    catch(err){
        next()
        }
  });

module.exports = router 