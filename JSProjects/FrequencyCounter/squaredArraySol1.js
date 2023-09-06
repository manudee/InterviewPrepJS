/* 

Given two arrays , create a function to see 
if a 2nd array has squared values from the first one. 

Frequency of the elements of the squared array need to be the same
order can be anything

[1,2,3], [4,1,9] -> true
[1,2] -> [2,4]-> false
[1,2] -> [1,4,4]-> false

*/

function squaredArray(arr1,arr2){

//create frequency counter for arr1
//create frequency counter for arr2

// compare the keys from both fcs, if not equal , return false
    // else compare values from fc1 with squared values of fc2 for equality to return true
    // else return false

    if(arr1.length != arr2.length)
        return false;

    // fc1= createFc(arr1)
    // console.log(fc1)


    // fc2= createFc(arr2)
    // console.log(fc2)

    for(let i = 0 ; i < arr1.length; i++){
        let correctIndex = arr2.indexOf(arr1[i] ** 2)
        if(correctIndex == -1)
            return false;
        arr2.splice(correctIndex,1)
    }

    return true;

}

// function createFc(arr){

//     const fc = {}

//     for(let val of arr){
//         fc[val] = fc[val] + 1 || 1;
//     }

//     return fc;


// }


val = squaredArray([1,2,3], [4,1,9])
console.log(val)

val = squaredArray([1,2], [2,4])
console.log(val)

val = squaredArray([1,2], [1,4,4])
console.log(val)