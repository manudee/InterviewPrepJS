/* 

"lorie loled", "lol"

*/


function strSearch(longStr,shortStr){
    let count = 0;
    for(let i = 0 ; i < longStr.length; i++){
        for (let j = 0 ; j < shortStr.length; j++){

            if(longStr[i+j] !== shortStr[j]) break;
            if(j === shortStr.length - 1) count++;
        }
    }
    return count;

}


val = strSearch("lorie loled lol", "lol")
console.log(val)


val = strSearch("hello worldhelo thishelo ishelo", "helo")
console.log(val)