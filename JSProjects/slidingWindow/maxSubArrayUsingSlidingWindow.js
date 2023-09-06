function maxSubArray(arr,n){
   
    if(arr.length < n ){
        return null;
    }
    
    let total = 0;
    for(let i = 0 ; i < n; i++){
        total += a[i]
    }

    let currentTotal = total;
    for(i = n ; i < arr.length; i++){
        currentTotal += arr[i] - arr[i-n];
        total = Math.max(currentTotal,total);
    }

    return total;




}