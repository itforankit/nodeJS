var fs = require('fs')
/*fs.writeFile("day2.txt","Hemmo this is sample file for day 2 file creation",function(error){
  if (error){
        console.log("error in wruiting the file")
   }
})*/

//fs.mkdirSync("testDir")

fs.readdir(__dirname,(err,files)=>
{
    if(err)
    {
        console.log(err)
    }
    else {
        console.log("\nCurrent directory filenames:")
        files.forEach(file => {
          console.log(file)
        })
      }
})


