var express = require('express')
var fs = require('fs')
var path = require('path')
var bodyparser = require('body-parser')
var server = express()
server.use(bodyparser.json())

// JSON.parse() accepts a valid json string as an argumentan convert that as JSOn

var staticpath = path.resolve(__dirname,"../public")
server.use(express.static(staticpath))

server.get('/', function(req,res){
    console.log("request received here and now after processing requesting we will send response back")
    res.sendFile(path.resolve(__dirname,'../public/index.html'))

})  

server.post('/', function(req,res){
    console.log("request received here and now after processing requesting we will send response back")
    res.sendFile(path.resolve(__dirname,'../public/index.html'))

}) 

server.get('/readfile' , function(req,res){
    var filepath = path.resolve(__dirname,('../package.json'))
    console.log("path of file is" , filepath)
  fs.readFile(filepath, function(error, data){
     if(error){
         console.log("error ", error)
         res.send("Some Error Occured")
     }else{
         console.log("data " , data)
         res.send(data.toString())
     }
  })
})

server.post('/readfile', function(req,res){
    var request  = JSON.stringify(req.body)
    var requestJson = JSON.parse(request)
    console.log("..... coming from post method" ,requestJson, request , req.body)
    res.send("Hello Our first post route")
})

server.get('/*', function(req,res){
    
    res.send("Unfortunately the page you are looking for not found")
})


var Port = 5000


server.listen(Port, function(){
    console.log("Server is running on", Port)
})

