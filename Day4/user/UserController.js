var UserService = require('./user.service')
exports.createUser = function(req,res){
    console.log("email for which we have to create account is", req.body)
    UserService.createUser(req.body).then(function(){
        res.send({
            message:"User Registered"
        })
    }).catch(function(error){
       if (error)
       {
        res.status(500).send({
            error:"Duplicate Email Id"
        })
       }else{
        res.status(500).send({
            
            error:"Internal Server Error"
        }) 
       }
        
    })
}

exports.Signup = function(req,res){
   // console.log("email for which we have to create account is", req.body)
    res.send({
        message:"Here we will  user will signup"
    })
}

exports.login = function(req,res){
    console.log("email for which we have to create account is", req.body)
   /* // res.send({
     //   message:"Here  user will login"
    //}) */
    var result = UserService.findUser(req.body)
    .on('Success', function(){
        res.send({
               message:"Success"
           }) 
    })
    .on('Invalid_Email', function(){
        res.status(500).send({
           error:"Invalid Email"
       }) 
   })
    .on('Invalid_credentials', function(){
         res.status(500).send({
            error:"Invalid Credentials"
        }) 
    })
    
    .on('ERROR', function(){
        res.status(500).send({
            error:"Internal Server Error"
        }) 
    })
    console.log("result of find operation", result)
}

exports.allusers = function(req,res){
 //   console.log("email for which we have to create account is", req.body)
    res.send({
        message:"Here all users"
    })
}

//DRY -- Don't repeat your code
