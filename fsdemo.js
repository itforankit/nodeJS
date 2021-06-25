var fs = require('fs')
fs.writeFile("day2.txt","Hemmo this is sample file for day 2 file creation",function(error){
  if (error){
        console.log("error in wruiting the file")
   }
})

var errorfile =fs.writeFileSync("sync.txt","Example file")
console.log("error",errorfile)
