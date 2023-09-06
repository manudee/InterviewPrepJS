//sliding window, we create a window and window closes or 
//opens and a new window created based on a condition

/* 

Given an array of integers and a number N, write a function
that returns max sum of N consecutive integers in the array


[1,2,5,2,8,1,5],2 -> 10
[1,2,5,2,8,1,5],4 -> 17
[4,2,1,6],4 -> 13
[],4 -> null

*/


function maxSubArraySum(arr,n){

    if(arr.length < n){
        return null;
    }

    let max = -Infinity
    for(let i = 0 ; i < ( arr.length - n + 1) ; i++){
        let temp = 0 ;
        for(let j = 0; j < n; j++){
            temp += arr[i+j]
        }
        if(temp > max){
            max = temp;
        }
    } 
    return max;
}

val = maxSubArraySum([1,2,5,2,8,1,5],2)
console.log(val)

val = maxSubArraySum([1,2,5,2,8,1,5],4)
console.log(val)

val = maxSubArraySum([],2)
console.log(val)

val = maxSubArraySum([4,2,1,6],4)
console.log(val)