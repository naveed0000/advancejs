/*
    lref  = undefined
    lval <- getValue(lref)
    rref = 100
    rval <-- getValue(rref);
    lnum <-- ToNumber(lval) , lnum get ToNumber(NaN)
    rnum <-- ToNumber(rval) , rnum get ToNumber(100);
    NaN - 100
    NaN  
*/
console.log(undefined - 100);


/*
    lref  = null 
    lval <- getValue(lref)
    rref = 100
    rval <-- getValue(rref);
    lnum <-- ToNumber(lval) , lnum get ToNumber(0)
    rnum <-- ToNumber(rval) , rnum get ToNumber(100);
    0  - 100 --> -100


*/
console.log(null - 100);


/*
    lref  = null 
    lval <- getValue(lref)
    rref = 100
    rval <-- getValue(rref);
    lnum <-- ToNumber(lval) , lnum get ToNumber(0)
    rnum <-- ToNumber(rval) , rnum get ToNumber(100);
    0  - 100 --> -100

*/

console.log(100 - true + false + true);
console.log(typeof(+Infinity + -Infinity));// NaN
console.log(typeof(-0 + -0));
console.log(-10 - (100 -10));
console.log(0 - "    ");   
console.log(-null + (-(+(0))) );
