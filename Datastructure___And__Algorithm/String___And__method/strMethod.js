// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String

// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String#string_primitives_and_string_objects

var stringOne  = "freeCodeCamp is the best place to learn";
var stringTwo  = "frontend and backend development";

// charAt()
console.log(stringOne.charAt(1));

// charAt()
console.log("charCodeAt() Method," , stringOne.charCodeAt(1));

// concat()
console.log(stringOne.concat(stringTwo));

//endsWith()
let endWith = stringTwo.endsWith("development");
console.log(endWith , typeof(endWith));

//fromCharCode()
let getCharCode = String.fromCharCode(114);
console.log(getCharCode , typeof(getCharCode));

// include()
let checkAnyWord = stringTwo.includes("And");
console.log(checkAnyWord, typeof(checkAnyWord));

// indexOf()
let searchAnyChar = stringTwo.indexOf("and");
console.log(searchAnyChar, typeof(searchAnyChar))

// fromCodePoint()
console.log(String.fromCodePoint(9731, 9733, 9842, 0x2F804) , typeof(String.fromCodePoint(9731, 9733, 9842, 0x2F804)) );

let str = "Naveed,shiakh";
let newStr = "";

let ascii = (isNaN(Number('a')));
console.log(ascii)