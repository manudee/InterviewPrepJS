/*
count unique values in a sorted array
[1,1,1,1,1,2] -> 2
[1,2,3,4,4,5,6,6,6] -> 6
[] -> 0
[1,1,1,1,1] -> 1
*/

function countUnique(arr){

    let i = 0
    let j = i + 1;
    if (arr.length == 0 ) return 0;
    while (j <= arr.length - 1){
        if(arr[i] != arr[j]){
            i++;
            arr[i] = arr[j];
        }
        
        // console.log(i,j)
        j++;
    }
    return i+1;
}

val = countUnique([1,1,1,1,1,2])
console.log(val)

val = countUnique([1,2,3,4,4,5,6,6,6])
console.log(val)

val = countUnique([])
console.log(val)

val = countUnique([1,1,1,1,1,1])
console.log(val)