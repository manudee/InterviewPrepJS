const arr = [10,20,30,40,50,60,70,80]
const obj = {'a':10, 'b':20, 'c':30,'d':40,'e':50,'f':60,'g':70,'h':80}

const strVal = 'Hello There'


//for loop to loop through the string
// for(let i = 0 ; i < strVal.length; i++){
//     console.log(strVal[i])
// }


//for loop to loop through the string
// for(let char of strVal){
//     console.log(char)
// }





// for(let i in arr){
//     // console.log(i);
//     console.log(arr[i])
// }

for(let char in obj){
    console.log(char)//key
    console.log(obj[char])//value

}

// for(let char of arr){
//     // console.log(i);
//     // console.log(char);
//     console.log(char)
// }


// console.log(arr.splice(1,2))//changes the original array
// console.log(arr.slice(1,3))//does not change the original array, returns a copy
// console.log(arr.reverse())
// console.log(Math.floor(Math.random() * (arr.length)))

