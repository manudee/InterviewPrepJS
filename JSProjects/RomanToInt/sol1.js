

/*

algorithm
loop through reversed string
    initialize total = 0, prevValue = 0
    pick current char and find its value from Roman Map
    if value is >= prevVal, add total += value
    else total -= value

    assign prevValue = value

*/
var romanToInt = function(s) {
    
    const mapRoman = {
        "I" : 1,
        "V" : 5,
        "X" : 10,
        "L" : 50,
        "C" : 100,
        "D" : 500,
        "M" : 1000
    }


const numberStr = s.split('').reverse()
let total = 0
let prevVal = 0

for(char of numberStr){

   const value = mapRoman[char];

   if(value >= prevVal){
       total += value
   }

   else {
       total -= value;   
   }


   prevVal = value;

  
}
 return total;

};


val = romanToInt('III')
console.log(val)


val = romanToInt('LVIII')
console.log(val)


val = romanToInt('MCMXCIV')
console.log(val)