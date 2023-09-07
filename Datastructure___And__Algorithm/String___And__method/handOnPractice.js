let text = "Apple, Banana, Kiwi";
let part = text.slice(7,13);
let part2 = text.slice(-12)
let part3 = text.slice(-12,-6)
// let part2 = text.slice()
console.log(part , part2 , part3);

let names = "Naveed , akshay, jay, danish, vijay";
let callMethod = names.slice("|");
console.log(callMethod);

let numb = 5;
let part5 = numb.toString();
let padded = part5.padEnd(4,"0");
console.log(padded)

let str = "Naveed , shaikh,";
console.log(names.split(""))