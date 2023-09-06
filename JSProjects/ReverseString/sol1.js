function reverse (str){

    let reversed = '';

    for (let char of str){
        reversed = char + reversed;
    }

    return reversed;

}

module.exports = reverse;

// val = reverse('abcd');
// console.log(val)