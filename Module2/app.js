const fs = require('fs');
const express = require('express');

//create object and add port
const app=express();
const port =6500;

app.get('/',(req,res)=>{
  res.send('<h1> Welcome to my first example using express</h1>')
})

app.listen(port,(err)=>{
    console.log('Server is running on port ' + port)
})
//adding one more route to display the list of movies
app.get('/getMovies',(req,res)=>{
fs.readFile('./data/db.json',(err,result)=>{
    if(err){
        throw err;
    }
    else
    {
        res.send(JSON.parse(result))
    }
})
})


//Sample code for File read and Append File
/*
fs.readFile('./data/db.json',(err,result)=>{
    if(err){
        throw err;
    }
    else
    {
        console.log(JSON.parse(result))
    }
})

fs.appendFile('./data/mytest.txt','My text read file - Ankit Singhal\n',(err)=>{
    if(err) throw err;
    else{
        console.log('Data written successfully')
        }
    }) */
