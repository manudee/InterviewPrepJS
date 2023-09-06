const inputArray = [1, 2, 3, 4, 5, 6, 7];
const k = 3;


// output [5,6,7,1,2,3,4]

function rotateArra(arr,k){
    const orgArra = arr
    const splicedArr = arr.splice(0,k+1)
    // console.log(orgArra)
    // console.log(splicedArr)

    // console.log(orgArra.shift(splicedArr))

    console.log(orgArra.concat(splicedArr))

    return orgArra.concat(splicedArr)

}


rotateArra(inputArray,k)
