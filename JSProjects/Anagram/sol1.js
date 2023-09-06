
// (fairy tales, tales fairy)
// (fairy tales, tales fairy)
// (fairy tales, tales fairy)




function anagram(stringA,stringB){

// create object with key pairs 
// compare the two objects for keys and values
    // if the keys are not the same return false
    // else compare the values for equality
        // if value matches - return true
        // else false
        val1 = createObj(stringA);
        console.log()
        val2 = createObj(stringB);
        console.log(val2)

        if(Object.keys(val1).length != Object.keys(val2).length) return false;
       
        for(let char in val1){
            if(val1[char] != val2[char])
                return false;

        }

        return true;


}

function createObj(str){

    const obj = {}

    for (let char of str.replace(/[^\w]/g,"").toLowerCase().split('')){
        obj[char] = obj[char] + 1 || 1;
    }

    return obj;

}

val = anagram('fairy tales', 'tales fairy')
console.log(val)

val = anagram('fairy tales', 'tales1 fairy')
console.log(val)

val = anagram('FAIRY TALES', 'tales Fairy')
console.log(val)
module.exports = anagram;
