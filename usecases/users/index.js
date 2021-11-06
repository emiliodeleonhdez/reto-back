const User = require("../../models/users").model
const bcrypt = require("bcrypt")
const encrypt = require("../../lib/encrypt")

//Funcion Create new user

const create = async (userInfo) =>{
    const {userName, password} = userInfo
    const passwordHashed = await encrypt.hashPassword(password) //Hace Hash de la contraseña del usuario 
    const user = new User({
        userName,
        password:passwordHashed
    })

    const savedUser = await user.save() //Salva usuario en la BD
    return {id:savedUser.id, userName:savedUser.userName}
}



const getByUsername = async (userName) => {
    return await User.findOne({ userName }).exec();
  };


const getById = async (userId) => {
    return await User.findById({ userId }).exec();
  };
module.exports = {
    create,
    getByUsername, 
    getById,

}

