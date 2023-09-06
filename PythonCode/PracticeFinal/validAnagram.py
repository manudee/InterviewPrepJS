word1= 'aza'
word2= 'aaz'

def validAnagram(word1,word2):
    if(len(word1) != len(word2)):
        return False

    counter1 = {}
    counter2 = {}

    for x in word1:
        counter1[x] = (counter1.get(x,None) or 0) + 1
        counter2[x] = (counter2.get(x, None) or 0) + 1

    print(counter1)
    print(counter2)
    for value in counter1:
        if(counter1[value] != counter2[value]):
            return False

    return True


print(validAnagram(word1,word2))
print(validAnagram('anagram', 'nagaram'))
print(validAnagram('anagram1', 'nagaram'))
print(validAnagram('Nice', 'cine'))
print(validAnagram('12341', '11432'))