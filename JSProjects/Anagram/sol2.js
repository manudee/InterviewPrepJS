//anagram using sort

function anagram(stringA,stringB){

 //cleanup string
 //sort 
 //compare

 valA = cleanStr(stringA)
 console.log(valA)
 valB = cleanStr(stringB)
 console.log(valB)

 return valA === valB

}
    

function cleanStr(str){

   return str.replace(/[^\w]/g,"").toLowerCase().split('').sort().join('');
}

val2 = anagram('Hello There', 'there hi')
console.log(val2)

val2 = anagram('Hello There', 'there hello')
console.log(val2)