//Count the number of unique values in a sorted array or string.

/*
count unique values in a sorted array
[1,1,1,1,1,2] -> 2
[1,2,3,4,4,5,6,6,6] -> 6
[] -> 0
[1,1,1,1,1] -> 1
*/

// build a frequency counter
// count the number of keys

function countUnique(arr){

    const valueMap = {}

    for(val of arr){
        valueMap[val] = valueMap[val] + 1 || 1
    }
    console.log(valueMap)
    return Object.keys(valueMap).length;

}

output = countUnique([1,1,1,1,1,2])
console.log(output)

