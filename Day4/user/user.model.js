var Mongoose = require ('mongoose')

var UserSchema = Mongoose.Schema({
    email:{type:String,required:true,unique:true},
    password:{type:String,required:true}
})

var UserModel = Mongoose.model('users',UserSchema)
//we are mapping user schema with users collection in above line

module.exports =UserModel
