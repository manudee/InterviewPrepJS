
function chunkArray(arr,size){

    let index = 0;
    const chunked = [];

    while(index < arr.length){

        chunked.push(arr.slice(index,index+size))
        index += size

    }

    return chunked;

}

val = chunkArray([1,2,3,4,5,7,8,9,9,9,10],3);
console.log(val);
module.exports = chunkArray;
