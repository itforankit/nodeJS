function x(){
    console.log("Hello Ankit")
    while(true)
    {
        console.log("Infinite it's blocking code")
    }
}

x() //not asynchornus so never will go to next line

consol.log("Out side Loop")
