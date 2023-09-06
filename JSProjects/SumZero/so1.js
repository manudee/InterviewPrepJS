//sumZero

/*
Write a function that accepts sorted array of integers.
The function should find first pair that sum upto 0
Return an array including  both integers that sum upto 0 or undefined if the pair does not exist
*/

// [-3,-2,-1,0,1,2,3] -> [-3,3]
// [-2,,0,1,3] -> undefined
// [0,1,3] -> undefined


// o(n2) solution
// function (arr){
//     for(let i = 0 ; i < arr.length; i++){
//         for (let j = i + 1; j < arr.length; j++){
//             if(arr[i] + arr[j] === 0)
//                 return [arr[i],arr[j]]
            
//         }
//     }
// }

function sumZero(arr) {

    let left = 0;
    let right = arr.length - 1;

    while (left < right){
        let sum = arr[left] + arr[right];
        if (sum === 0){
            return [arr[left],arr[right]];
        }
        if (sum < 0 ){
            left++;
        }
        else if (sum > 0 ){
            right--;
        }
    }
}


val = sumZero([-3,-2,-1,0,1,2,3])
console.log(val);

val = sumZero([-3,-2,-1,0,1,2,3,4])
console.log(val);

val = sumZero([-2,-1,0,1,2,3,4])
console.log(val);

val = sumZero([0,1,2,3,4])
console.log(val);