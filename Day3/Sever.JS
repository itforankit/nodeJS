var express = require('express')
var Port=5000
var server = express()
var controller = require('./controller')
//virtually line 4 will become var controller = {FileUpload: fucntion}

server.get('/upload',controller.fileUpload)

