var express = require('express')
var bodyparser = require('body-parser')
var Mongoose= require('mongoose')
var Port = process.env.Port || 5000
var server = express()
var dburl="mongodb://localhost:27017/nodeedurekajune"

Mongoose.connect(dburl).then(function(){
    console.log("Connected to DB")
}).catch(function(error){
    console.log("error in conenction ", error)
})

server.use(bodyparser.json())
server.use('/api',require('./routes'))

server.listen(Port,()=>{
    console.log("server is running at ", Port)
})

