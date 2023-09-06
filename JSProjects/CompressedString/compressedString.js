/*

Implement a function to perform basic string compression using the counts of repeated characters. 
For example, the string "aabcccccaaa" would become "a2b1c5a3" using javascript

aa -> a2
abc -> a1b1c1
aabcccccaaa -> a2b1c5a3

*/


function compressedString(s){

    const compressedString = []
    let count = 1

    for(let i = 1 ; i < s.length ; i++){
        if(s[i] == s[i-1]){
            count++;
        }
        else {
            compressedString.push(s[i-1] + count);
            count = 1;

        }
        // console.log(compressedString.join(''))
        console.log(i)
        
    }
    compressedString.push(s[s.length - 1] + count)

    // console.log(s[s.length-1])
    return compressedString.join('');


}

val = compressedString('aabcccccaaa')
console.log(val)

val = compressedString('abc')
console.log(val)

val = compressedString('aabbcc')
console.log(val)

val = compressedString('aa')
console.log(val)