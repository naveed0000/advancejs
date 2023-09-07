function timeConsumingByLoop() {
    console.log("loop start");
    for(let i = 0; i < 1000_000_000; i++){
        //  some work
        // console.log("inside the loop");
    }
    console.log("loop ends");
}

function timeConsumingByRuntimeFeature() {
    console.log("starting timer");
    setTimeout(function exect() {
        console.log("Complete the timer");
    <</p>
    }, 20_000);
}

console.log("HI");
timeConsumingByRuntimeFeature();
timeConsumingByLoop();

console.log*("BYE"); 
