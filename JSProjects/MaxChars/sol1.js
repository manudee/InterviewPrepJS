//max chars, 
//repeated chars

function maxChars(str){


    const chars = {}

    for (let char of str){
        chars[char] = chars[char] ? chars[char] + 1 : 1;
        // chars[char] = chars[char] +1 || 1

    }

    console.log(chars);


    max = 0
    maxChar = ''
    for (let val in chars){
        if (chars[val] > max){
            max = chars[val]
            maxChar = val
        }

    }
    console.log(max)
    console.log(maxChar)

    return maxChar;
}

module.exports = maxChars

maxChars('Hellooo')