var express = require('express')
var server = express()
var fs = require('fs')
var bodyparser = require('body-parser')
server.use(bodyparser.json())
const path = require('path');

server.use(express.static(__dirname + '/public'));

server.get('/',function(request,response)
{
    console.log("request recvd here and now after processing request we will send response back")
    response.send("hey we are launching soon")
}) //route method as get and name as "/"


server.get('/test',function(request,response)
{
    console.log("request recvd here and now after processing request we will send response back",__dirname)
    //response.send("../public/index.html")
    response.sendFile(path.join(__dirname, '/public/index.html'));
}) //route method as get and name as "/"

server.get('/readfile',function(req,res){
    fs.readFile("../nodeJs/package.json",function(error,data){
        if(error)
        {
            console.log(error)
            res.send("error",error)
        }
        else
        {
            res.send(data.toString())
        }
    })
})

/*server.get('/*',function(req,res){
    res.send("not a valida path")
})*/


/*server.post('/readfile',function(req,res){
    console.log("coming from post methid")
    res.send("hello our first post route")
})*/


var Port=5000
server.listen(Port,function()
{
console.log("Server Listenning on ",5000)
})

