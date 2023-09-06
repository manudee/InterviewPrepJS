function binarySearch(arr,value){

    let left = 0;
    let right = arr.length - 1;
    let middle = Math.floor((left + right) /2);
    // console.log(left,right,middle);


    while(arr[middle] !== value && left <= right){

        console.log(left,right,middle);



        if(value < arr[middle]){
            right = middle - 1;

        }

        else {
            left = middle + 1;

        }

        middle = Math.floor((left + right) /2);
        console.log("middle is" + middle);
        // return middle;

    }

    if(arr[middle] == value){
    
        return middle;
    } 
    else {
        return -1;
    }

}


// val = binarySearch([1,2,3,4,5,6,7,8],4)
// console.log(val)

// val = binarySearch([1,2,3,4,5,6,7,8],14)
// console.log(val)

val = binarySearch([1,2,3,4,5,6,7,8],8)
console.log(val)