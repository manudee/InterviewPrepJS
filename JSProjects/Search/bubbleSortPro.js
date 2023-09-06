function bubbleSortBetter(arr){

    for(let i = arr.length ; i > 0 ; i--){
        for(j = 0 ; j < i - 1; j++){
            if(arr[j] > arr[j+1]){
                //swap
                let temp = arr[j];
                arr[j] = arr[j+1];
                arr[j+1] = temp;
            }
        }
    }
    return arr;
}


val = bubbleSortBetter([34,56,12,3,45,100])
console.log(val)