var express = require('express')
var UserController = require('./UserController')
var router = express.Router()

router.post('/register', UserController.createUser)
router.post('/Signup', UserController.Signup)
router.post('/login', UserController.login)
router.post('/allUsers', UserController.allusers)


module.exports = router