const Post = require("../../models/posts").model
const bcrypt = require("bcrypt")
const encrypt = require("../../lib/encrypt")

const create = async (postData) =>{
    const post = new Post(postData)
    const savedPost = await post.save()
    return savedPost
}

module.exports = {
    create,
}