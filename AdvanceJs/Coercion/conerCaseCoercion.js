// ToString --> "" + value;
console.log("" + 0);
console.log("" + (-0));

console.log("" + []);// [] -> ""
console.log("" + {});

console.log("" + [1, 2, 3]);
console.log("" + [null, undefined, "shaikh"]);
console.log("" + [1, 2, null, 4]);


//ToNumber
console.log(0 - "010"); // decimal number
// console.log(0 - 010); // octal number
console.log(0 - "0xb");// hexadeicmal number
console.log(0 - 0xb);


console.log([] - 1);
console.log([""] - 1);
console.log(["1"] - 1);

