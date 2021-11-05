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

module.exports = router 