/* write a function to find longest unique characters in a string 

'helloqowiru' -> 

*/

function longestUniqueChar(str){

    let charIndex = {};
    let start = 0;
    let maxLength = 0;
    

    for(let end = 0 ; end < str.length ; end++){
        const char = str[end];
     
        if(charIndex[char] !== undefined && charIndex[char] >= start){
            console.log(charIndex[char])
            start = charIndex[char] + 1;
        }
        charIndex[char] = end;
        maxLength = Math.max(maxLength, end - start + 1);
        console.log("Iteration")
        console.log(end)
        console.log(start)
        console.log(charIndex)
        console.log(maxLength)

    }
    return maxLength;

}

val = longestUniqueChar('Hello');
console.log(val);
