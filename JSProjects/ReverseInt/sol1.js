function reverseThis(val){

    //convert int to str 
    //then use reverseAString
    const reversed = val.toString().split('').reverse().join('');

  
    return parseInt(reversed) * Math.sign(val)
    
    
}

module.exports = reverseThis;


val = reverseThis(123);
console.log(val);


val = reverseThis(-15);
console.log(val);


val = reverseThis(500);
console.log(val);