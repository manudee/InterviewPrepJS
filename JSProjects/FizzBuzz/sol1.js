function fizzBuzz(n){
i = 0
while(i <= n){
    
    if(i % 3 == 0 && i % 5 == 0){
        console.log('fizzbuzz')
    }
    else if(i % 5 == 0){
        console.log("buzz")
    }
    else if(i % 3 == 0){
        console.log("fizz")
    }
    else console.log(i)
    i++;

}
   
}

// fizzBuzz(25)
fizzBuzz(5)