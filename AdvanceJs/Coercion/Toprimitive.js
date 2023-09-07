let obj = {
    toString() {
    // by default give [object object]
    // if you do typeof tostring() { } , it gives us string
    //  return "toString function is existed";   
        return;
    },
    valueOf(){
    // by default it returns the same object
    // it you do typeof valueOf() { }, it gives us object
        return;    
    } 

};
console.log(obj.toString() , obj.valueOf());

console.log(typeof obj.toString() , typeof obj.valueOf());

console.log("\t\t\t NOW do by Subtraction Operator ");

// do hand on experiment
let obj1 = {};
console.log(10 - obj1); //obj.valueOf --> object , toString --> [object object] return result then do tonumber  
console.log(obj1 - obj1) // 


let obj2 = {x: 9, y: 8};
console.log(100 - obj2);    // NaN
// whatever inside object it doesn't matter, only matter is tostring and valueOf

let obj3 = {x: 7, valueOf() { return 99}};
console.log(100 - obj3);

let obj4 = {x: 8, toString() { return "88" }};
console.log(90 - obj4);


let obj5 = {x: 7, toString() { return {} }};
// console.log(100 - obj5);// it give type error exception 



console.log("\t\t\t NOW do by addition operator ");

let objAd = {};
console.log(objAd); // "18" "[object Object]" --> "18[object Object]"
console.log("18" + objAd) // "18[object Object]"