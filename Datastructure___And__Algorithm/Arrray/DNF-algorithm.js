/*
    1. Given an array which only contains 0 and 1 the data is stuffled randomly 
        e.g arr = [0, 1, 0, 0, 1, 0, 1, 0, 1]  
    2. write a function that can rearrange the data such that all the 0's  are present before 1's 
    3. Condition -> Do the rearrangement, by ready accerssay the whole array only once (single pass)
    4. don't create new Array 
*/


let arr = [0, 1, 0, 0, 1, 0, 1, 0, 1];

let getArr  = function arrangeArr(arr){
    let i = 0, j = arr.length-1;
    while(i <= j){
        if(arr[i] == 1){
            [arr[i], arr[j]] = [arr[j] , arr[i]];
             j--;
        }
        else if(arr[i] == 0){
            i++;
        }
    }
    return arr;
};
console.log(getArr(arr));