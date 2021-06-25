var path = require('path')
var p ='F:/Learning/nodeJS/Day4/Notes.txt'
var q ='F:\\Learning\\nodeJS\\Day4\\Notes.txt'

console.log(path.dirname(p))
console.log(path.basename(p))
console.log(path.extname(p))
console.log(path.isAbsolute(p))


console.log(path.dirname(q))
console.log(path.basename(q))
console.log(path.extname(q))
console.log(path.isAbsolute(q))

