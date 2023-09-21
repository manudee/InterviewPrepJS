class HelloWorld:
    # def __init__(self, name):
    #     self.name = name

    def printName(self, name ='World' ):
        print("Hello {}".format(name))





x = HelloWorld()
x.printName('Manasi')


x = HelloWorld()
x.printName()

arr = [1,2,3,4,5,6,7,20]
print(arr[3:])
print(arr[:3])
print(arr[-3:])
print(arr[:-3])
print(arr[:])

