const Post = require("../../models/posts").model
const bcrypt = require("bcrypt")
const encrypt = require("../../lib/encrypt")

const create = async (postData) =>{
    const post = new Post(postData)
    const savedPost = await post.save()
    return savedPost
}

const getById = async (userId) => {
    return await Post.findById(userId).exec();
  };

  const updatePost = async (id, update) =>{
    const {_id} = id
    const {
        postTitle,
        postBody,
        userId,
        coverImage,
        tags,
    }=  update;  
    return await Post.findByIdAndUpdate(id,update,{new:true}).exec()

}

const deletePost = (id) => {
    return Post.findByIdAndDelete(id).exec();
  };

const getByQueryParam = (queryParam) => {
    if (typeof queryParam == "array"){
        return Post.find({$or: queryParam}).exec(); 
    }
    return Post.find({}).exec(); 
}

module.exports = {
    create,
    getById,
    updatePost,
    deletePost,
    getByQueryParam,
}
// Ignore