console.log(Number("124"));
console.log(Number("abcdf"));
console.log(Number("0xa"));

let x = NaN;
console.log(x == NaN);  

console.log(isNaN(x));
// thing getting  intersting  now 
/*isNaN uses ToNumber  */
console.log(isNaN("Naveed"));
console.log(Number.isNaN("Naveed"));
console.log(Number.isNaN(x));

let y = NaN;
if(typeof(y) == 'number' && y !== y){
    console.log(true);
}
