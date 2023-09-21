# Write a recursive function called capitalizeFirst.
# Given an array of strings, capitalize the first letter of each string in the array.

# function capitalizeFirst () {
  #// add whatever parameters you deem necessary - good luck!
#}

# capitalizeFirst(['car','taco','banana']); // ['Car','Taco','Banana']

def capitalizeFirst(arr):
    if(len(arr) == 0): return []

    firstWord = arr[0]
    capitalizedWord = firstWord[0].upper() + firstWord[1:]
    print(capitalizedWord)
    rest_of_array = capitalizeFirst(arr[1:])

    return [capitalizedWord] + rest_of_array


word_list = ["hello", "world", "python"]
capitalized_list = capitalizeFirst(word_list)
print(capitalized_list)