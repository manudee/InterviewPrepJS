# Write a recursive function called capitalizeWords. Given an array of words, return a new array containing each word capitalized.

#function capitalizeWords () {
 # // add whatever parameters you deem necessary - good luck!
#}

#// let words = ['i', 'am', 'learning', 'recursion'];
#// capitalizedWords(words); // ['I', 'AM', 'LEARNING', 'RECURSION']

def capitalizeWords(arr):
    if(len(arr) == 0 ): return []

    firstWord = arr[0]
    capitalizedWord = firstWord.upper()

    return [capitalizedWord] + capitalizeWords(arr[1:])


val = capitalizeWords(['i', 'am', 'learning', 'recursion'])
print(val)