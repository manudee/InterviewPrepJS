//Linear Search

function linSearch(arr,value){

    for(let i = 0 ; i < arr.length; i++){
        if(arr[i] == value){
            return i;
        }
    }

    return -1;
    
}

val = linSearch([1,2,3,4],4)
console.log("index for the value is " + val)

val = linSearch([1,2,3,4],5)
console.log("index for the value is " + val)