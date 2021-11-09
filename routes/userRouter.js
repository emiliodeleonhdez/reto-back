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

  router.get("/:id", async (req, res, next) => { 
    const {id}=req.params

    try {

    const user= await user.getById(id)    
    res.status(200).json({ 

        ok:true,
        payload:user,

    }); 

    }

    catch(err){
        next()
        }
  });

  router.patch("/:id", async (req, res, next)=>{
      try{
        const {id}=req.params
        const update = req.body
        console.log(id)
        /* const {update}=req.body */
        const userToUpdate = await user.updateUser(id, update)
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