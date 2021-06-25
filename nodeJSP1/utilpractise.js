var util = require('util')
var txt= 'Congratulation %s on completing his %d certificatem, which Node JS'
var result = util.format(txt,'Ankit',5)
console.log(result)