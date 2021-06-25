var UserModel = require('./user.model')
var EventEmitter = require('events')
exports.createUser = function(data){
  return new Promise((resolve,reject)=>{
      var validuserdata=new UserModel(data)
      validuserdata.save().then(function(newuser){
          console.log("new user is saved in DB ", newuser)
          resolve()
      }).catch(function(error){
        console.log("Error in saving the data in to DB ", error)
        if(error.code==11000){
          reject("Duplicate")  
        }
        else{
          reject()
        }
        
      })
  })
}

exports.findUser = function(data){
 let emitter = new EventEmitter()
 var query = {email:data.email,password:data.password} 
 UserModel.findOne(query).then((user)=>{
   if (user) {
     if(user.password==data.password){
      return emitter.emit('Success')
     }else{
      return emitter.emit('Invalid_Email')
     }
   }else{
  return emitter.emit('Invalid_credentials ')
 }
 }).catch(function(){
   return emitter.emit('ERROR')
 })
 return emitter
}

new UserModel({
    email:"itforankit@gmail.com",
    name:"Ankit Singhal",
    password:"abc@123"
})