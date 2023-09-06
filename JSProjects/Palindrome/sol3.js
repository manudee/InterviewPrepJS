function palindrome(str){

    for(i = 0 ; i < str.length/2; i++){
        if(str[i] == str[str.length - i - 1]){
            return true;
        }
        else return false;
    }
}

module.exports = palindrome;

//False
val = palindrome('abcdsd');
console.log(val);

//True
val = palindrome('BAB');
console.log(val);

//True
val = palindrome('asdsakljdsal');
console.log(val);

//True
val = palindrome('abba');
console.log(val);