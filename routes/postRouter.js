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

router.get("/", async (req, res, next) => {

  try {
    const {postTitle,postBody,userId,tags} = req.query 
    const  queryParams = [{postTitle}, {postBody},{userId},{tags}]
    const payload = await posts.getByQueryParam(queryParams);

   
    res.json({
      ok: true,
      message: "Done!",
      payload,
    });
  } catch (err) {
    next(err);
  }
});

router.get("/:id", async (req, res, next) => { 
    const {id}=req.params

    try {

    const postById = await post.getById(id)    
    res.status(200).json({ 

        ok:true,
        payload:postById,

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
      const postToUpdate = await post.updatePost(id, update)
      console.log(postToUpdate)
      res.status(202).json({
          ok:true,
          message:"Post updated",
          payload:postToUpdate,
      })
    }catch(err){
        next(err)
    }
})

router.delete("/:id", async (req, res, next) => {
    const { id } = req.params;
    try {
      const deletedPost = await post.deletePost(id);
      res.json({
        ok: true,
        message: "Post deleted successfuly",
        payload: deletedPost,
      });
    } catch (err) {
      next(err);
    }
  });



module.exports = router 