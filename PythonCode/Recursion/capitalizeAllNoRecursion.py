

def capitalizeFirst(arr):
    capitalizeFirst = [ word.upper() for word in arr ]

    return capitalizeFirst

word_list = ["hello", "world", "python"]
capitalized_list = capitalizeFirst(word_list)
print(capitalized_list)