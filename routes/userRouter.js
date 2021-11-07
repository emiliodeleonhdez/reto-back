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

  router.patch("/:userId", async (req, res, next)=>{
      try{
        const {userId}=req.params
        const update = req.body
        console.log(userId)
        /* const {update}=req.body */
        const userToUpdate = await user.updateUser(userId, update)
        console.log(userToUpdate)
        res.status(202).json({
            ok:true,
            message:"User updated",
            payload:userToUpdate,
        })
      }catch(err){
          next(err)
      }
  })

module.exports = router 