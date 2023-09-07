// higher order function --> there are function which take another function as agrument 
// these are called higher order functions



function f(x, fn){
    /**
     * x -> number
     * fn -> function 
     */
    console.log(x);
    console.log(fn);
    fn();
}

f(10, function exect() {
    console.log("I am an expression passed to a Hof")
});

// 

let arr = [1, 10, 9, 100, 1000, 11, 12, 13, 14, 2, 3]; // unsorted array

arr.sort() // it sorts the given array // [expectation] --> this is might arrange element in inc order

/**
 It is expected to return a negative value if the first argument is less than the second argument, zero if they're equal, and a positive value otherwise. If omitted, the elements are sorted in ascending, ASCII character order.
 
 [11,2,22,1].sort((a, b) => a - b)
 */


/**
 * 0 -> A, 1 -> b, 2 -> C, 3 -> D, 4 -> E 
 * [B, BA, J, BAA, BAAA, BB, BC, BD, BE, C, D] // if we arrange it according to dictionary
*[B, BA, BAA, BAAA, BB, BC, BD ...]; 
*/
console.log(arr); 

/**
 * if a < b -> a - b will be negative -> if cmp function gives negative a is placed before b (a < b)
 * if a > b -> b - a will be positive -> if cmp function gives positive b is placed before a (b > a)
 * sort is a HOF ,, the sort function takes a comparator function as agrument
*/
console.log(arr.sort((a,b) => (b - a)));
