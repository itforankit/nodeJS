var buf1 = Buffer.from('123456789')
var buf2 = Buffer.from('Hello')

buf2.copy(buf1,3)
console.log(buf1.toString())

console.log(Buffer.concat([buf1,buf2]).toString())
console.log(buf1.equals(buf2))
console.log(Buffer.compare(buf1,buf2))
