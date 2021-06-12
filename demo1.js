console.log(require('./third.js'))
var data1=require('./third.js')
console.log("data is",data1)
console.log("IP is",data1.IP)
console.log("PORT is",data1.PORT)

console.log(data1.getUsers())