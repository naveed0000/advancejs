/*
    Given decimal number x, convert it into a binary number (we can return in a form of a string)
    x = 5 
*/


let number = 6;

let result = function decimalToBinary(number){
    let Ans = "";
    while(number > 0){
        if(number % 2 == 0){
            Ans = "0" + Ans ;
        }
        else{
            Ans = "1" + Ans;
        }
        number = Math.floor(number/2);
    }
    return Ans;
}

console.log(result(number));