/* 

chunk array 
[1,2,3,4,5],3 ---> [1,2,3], [4,5]
[1,2] -> 2  --> [1,2]
[1,2,3,4,5,6], 8 --> [1,2,3,4,5,6]
*/


//chunked = [ [1,2,3], ]

// last = last[chunked.length - 1]


function chunkArray(arr,size){

    const chunked = [];

    for (let element of arr){
        const last = chunked[chunked.length - 1];

        if (!last || last.length === size){
            chunked.push([element])
        }
        else
            last.push(element)

    }

    return chunked;

}

val = chunkArray([1,2,3,4,5,7,8,9,9,9,10],3);
console.log(val)
module.exports = chunkArray;