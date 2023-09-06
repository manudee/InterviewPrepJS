///Hello World --> World Hello


function reverseWords(str){
    const arr = [];

    const splitWords = str.split(' ')
    console.log(splitWords)

    for(let j = splitWords.length - 1; j >= 0; j--){
        arr.push(splitWords[j])
    }

    return arr.join(' ')
}

val =  reverseWords('Hello World')
console.log(val)

val =  reverseWords('I am here hello')
console.log(val)