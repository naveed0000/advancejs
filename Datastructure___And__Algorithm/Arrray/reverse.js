let name = prompt("Enter you name Here");
let age = prompt("Enter your age Here");



let arr = [5, 9, 1, 8, 2, 3];
function swap(a, b){
    let temp = a;
    a = b;
    b = temp;
    return a , b;
}
function reverseArr(arr){
    let start = 0, end = arr.length-1;
    while(start <= end){
        // swap(arr[start],arr[end]);
        [arr[start], arr[end]] = [arr[end] , arr[start]];
        start++;
        end--;    
    }
    return arr;
}
console.log(arr);
console.log(reverseArr(arr));