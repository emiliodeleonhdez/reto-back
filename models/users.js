const mongoose = require("mongoose")

const Schema = mongoose.Schema

const schema = new Schema({
    userName:{
        type:String,
        required:true,
        trim: true,
        maxlength: 20,
        minlength: 1, 
        unique: true,
    },
    password:{
        type: String, 
        required: true,
        minlength: 1,
    },
    age:{
        type: Number,
        required: false,
        minlength:1,
    }

})

module.exports = {
    model: mongoose.model("User",schema),
    schema,
}