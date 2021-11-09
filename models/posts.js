const mongoose = require("mongoose")

const Schema = mongoose.Schema

const schema = new Schema({
   postTitle:{
       type: String, 
       required: true,
       minlength:1,
       maxlength:140, 
       unique:false,
   },
   postBody:{
        type: String, 
        required: true,
        minlength:1,
        maxlength:1040, 
        unique:false,  
   },
   userId:{
       type: String,
       required: false,
       minlength:1,
       maxlength:1040, 
       unique:false,
   },
   coverImage:{
        type: String,
        required: false,
        minlength:1,
        maxlength:2040, 
        unique: false,

   },
   tags:{
        type: String,
        required: false,
        minlength:1,
        maxlength:2040, 
        unique: false,
   }
})

module.exports = {
    model: mongoose.model("Posts",schema),
    schema,
}