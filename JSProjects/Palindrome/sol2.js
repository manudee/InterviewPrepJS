function palindrome(str){
   return str.split('').every((char, i) => {
        return char === str[str.length - i - 1]
    })
}


module.exports = palindrome;

//False
val = palindrome('abcdsd');
console.log(val);

//True
val = palindrome('BAB');
console.log(val);