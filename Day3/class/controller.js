var Service = require('./service')

exports.fileUpload = function(req,res){
    Service.uploadFile(req.body, function(value){
        res.send({
            data:value
        })
    })  // it will take some time  
}

exports.getCakes =  function(req,res){
    var axios  = require('axios')
    axios({
        method:"get",
        url:"https://apifromashu.herokuapp.com/api/allcakes"
    }).then(function(response){
        console.log("response from my pivate / personal server" , response.data)
        res.send({
            cakes:response.data.data
        })
    } , function(error){
        res.status(500).send({
            error:"Internal Server Error"
        })
        console.log("error from my pivate / personal server" , error)
    })
}

exports.signup =  function(req,res){
    console.log("req reached to controller")
Service.sendMail(req.body, function(error,data , callback){
  console.log(".......................")
  // after the task 
  // callback()
   
})
}

exports.initiateOffer =  function(req,res){
    var candidate = require('./promisedemo')
    candidate.manish(req.body.filename).then(function(){

        return "Start Packing Baby!!!"
    }).then(function(){

    }).then().then().then()
    // okay give newyourk
    // reject errors also and unhandled errors 
}

//Registeration of a user with sending him/her a verification
// tostoreindb -- async task
// sending 


//a(function(){})  inner function said to a that call me back when u are done
// if inner funciton is executed that simply means a is done
// a is simple completeed nonw based on a's completeion i need to do another tsk

// .catch will be called from reject or from any unhandled errors


// callback function 

// function passed in a function call
// example writetodb(data, function(){

//})

// writetidb will say to inner function that call me back once u are done with writing 

// function a(cb){
//     cb(function(cb){
//         cb(function(cb){
//             cb(function(cb){
//                 cb(function(){   
//                 })
//             })

//         })
//     })
// }

// this problem is known as callback hell 
// what is callback hell is a situation in which one callbal is passed inside another inside another 
// and we lost which call back is for which one 

// promise 
// what are promises? we will start once u are done with callbacks 
// questions ?


// a(function(cb){

// })