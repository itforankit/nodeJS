function ashu(){
console.log("1")
}

function ashu(num){
    console.log("2",num,num1)
    
}

function ashu(num,num1)
{
    if(num==undefined)
    {
        return
    }
    console.log("3",num,num1)
}

ashu(10)
ashu(10,100)
ashu()

//no function overloading

