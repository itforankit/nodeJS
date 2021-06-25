var fs = require('fs')
exports.manish  =  function(offerletter){
   return new Promise(function(resolve,reject){
       fs.readFile(offerletter, function(err,data){
           if(err){
               reject("Girlfriend is not allowing")
           }
           else{
               var salary = Number.parseInt(data.toString())
               if(salary>=150000){
                  resolve()
               }
               else{
                     reject("Salary is less")
               }
           }
       })
   })
}

// var answer  = manish()  // undfined 
// manish().then(function(response){
//     console.log("Manish accepted our offer")   
// }, function(error){
//     console.log("Manish rejected our offer" , error)
// })

//callback and promises are both asynchronous handling mechanisms
// callback is ugly and promises are beautifull 



// a promise is some commitment which either says resolve or rejct 