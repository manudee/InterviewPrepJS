function reverse(str){

    return str.split('').reduce((reversed,char) => {
        return char + reversed;
    }, '')
}

// module.exports = reverse;

val = reverse('asdjkashdjashdkja');
console.log(val);