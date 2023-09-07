
// let arr = [1, 10, 10000, 9, 2, 3, 11];

// arr.sort(function cmp(a, b) {
// 	return a - b;
// });

function doTask(fn, x) {
	// whole implementation is done by team A
  fn(x*x);
} // team A

// here team b tries to use it 
doTask(function (num) {
	console.log("Woah num is", num);
}, 9);