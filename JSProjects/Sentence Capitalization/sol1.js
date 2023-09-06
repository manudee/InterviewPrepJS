// " i am there" -> I Am There

function sentenceCapitalization(sentence){

//split the string to array
//

val1 = sentence.split("")
console.log(val1)

const finalSentencene = []

finalSentencene.push(val1[0].toUpperCase());

let index = 1

for(index = 1; index < val1.length; index++){
    if(val1[index-1] == " "){
        
        finalSentencene.push(val1[index].toUpperCase())
    }
    else finalSentencene.push(val1[index])
}


// return finalSentencene.join("")
console.log(finalSentencene.join(""))

}


val = sentenceCapitalization("i am there")
module.exports = sentenceCapitalization;