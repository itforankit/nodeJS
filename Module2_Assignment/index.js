const argv = require('yargs').argv;
const fs = require('fs');
const readline = require('readline');

const r1 =readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

function ifFileExists(filepath){
    try{
        fs.accessSync(filepath,fs.constants.F_OK);
        return true;
    } catch(e)
    {
        return false;
    }
}

function askForUseInput(message){
 r1.question(message,(filename)=>{
     if(ifFileExists(filename)){
         askForUseInput('File already exists, Pelase provide a new file name:=>');
     }
     else{
         writeToFile(filename)
         r1.close()
     }
 })
}

function writeToFile(filename){
    fs.writeFile('fileNameList.txt',filename, err=>{
        if(err){
            console.log('Error Occured');
            return;
        }
        fs.writeFile(filename, 'Hello', err =>{
            if(err){
                console.log('error occured')
                return
            }

        })
    })
}

if (argv._[0] == 'write') {
    askForUserInput('Please provide the filename:=>');
}
else {
    console.log('No write operation');
}
