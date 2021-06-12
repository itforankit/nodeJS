console.log("HellO Ankit")
function searchFlights(callback){
    setTimeout(()=>{
        console.log("Flights Found")
        callback()
    },10000)
}

searchFlights(function(){
    console.log("Flight booking inititated now after 10 seconds")
}) //it's taking 10 seconds


function ashwini(callback){
    callback()
}

//ashwini(function())