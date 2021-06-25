var express = require('express')
var Port  = 5000
var server = express()
var controller = require('./controller')
var bodyparser = require('body-parser')
// virtually line 4 will become var cotroller = {fileUpload : functiontion}


server.use(bodyparser.json())
server.get('/allcakes',controller.getCakes)
server.post('/signup', controller.signup)
server.post('/offer', controller.initiateOffer)



server.listen(Port,()=>{
    console.log("Server is listening on" , Port)
})


// localhost:5000/upload

// task uodating user profile 
// image to 

// api is something which listens to our request process that request and send s the response back


// client is requestin on our api and we are requesting another api 
// to request another api from our api we have a package known as http 

// var http = require('http')
// var request  =  require('request')
// http.post(url)
// http.get(url)

// to make api calls we are going to use request package 
// better readable better usage better parsing etc

// both packages make api calls so why request ?


// Seperations of conern 

// using a package is never a concept 
// concepts errro callback 
// import exports 



