///[[{}]] -> true

///[[{}}]] -> false

function matchPar(str){

    const myStack = [];

    const parMap = {
        "{": "}",
        "(":")"
    }


    for(char of str){
        console.log(char)
        if(char in parMap){
            myStack.push(char)
            console.log(myStack)
        }
        else if(char === '}'  || char === ')'){
            const lastOpen = myStack.pop();
            if(parMap[lastOpen] !== char){
                return false;
            }
        }
    }
    return myStack.length === 0;
}


// val = matchPar('[[{}]]')
// console.log(val)


// val = matchPar('[[{})}]]')
// console.log(val)



val = matchPar(['(){}'])
console.log(val)