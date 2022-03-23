const random  = (number, math) => 
Math.floor(Math.random()*number)

//recursive
//find ttge factorial of a number

const factorial = x => {
    if(x === 0) {
        return 1;
    }
    return x * factorial(x - 1)
}