function palindrome(str){

    return str === str.split('').reverse().join('');

}

// module.exports = reverse;

//False
val = palindrome('abcdsd');
console.log(val);

//True
val = palindrome('BAB');
console.log(val);