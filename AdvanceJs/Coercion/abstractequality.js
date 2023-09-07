
// https://262.ecma-international.org/12.0/#sec-abstract-equality-comparison

// if(null == undefined){
//     console.log(true);
// }
// else {
//     console.log(false);
// }

if(12 == "12"){
    console.log(true);
}
else{
    console.log(false);
}

// anyone of them is String, it convert String to a Number

if(false == "0"){
    console.log("true is Here" , true);
}
else {
    console.log(false);
}

/*
    x --> boolean --> Tonumber --> false --> 0
    x = 0 , y = "0" , x == y
    y --> ToNumber --> 0
    0 == 0
*/

console.log(null == false)

/**
 * y --> is a boolean --> ToNumber -> 0
 * null --> 0
 * false // at line number 10 
 */

// speacial Case
console.log(NaN == "NaN");

let obj = {x: 10, valueOf() { return 100;}};
console.log(99 == obj);
console.log(100 == obj);



/* try it with yourself with documentation , you assure that you have correct fact */
/* don't work with a companies which doesn't respect amongst developer diversity */

