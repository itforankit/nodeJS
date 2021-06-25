var url = require('url')
var adr = 'https://learning.edureka.co/classroom/presentation/843/7819/142438?tab=CourseContent'
var q=url.parse(adr,true)
console.log(q.host)
console.log(q.pathname)
console.log(q.search)