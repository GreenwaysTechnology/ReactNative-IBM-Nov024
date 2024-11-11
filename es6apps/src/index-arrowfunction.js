//es 5 anonymous function
let hello = function () {
    console.log('hello')
}
hello()
//es 6 arrow anonymous function
let hai = () => {
    console.log('hai')
}
hai()
//short cut: if function body has only one line of code: we can remove {}
hai = () => console.log('hai')
hai()
//arrow with parameters
let math = (a = 0, b = 0) => {
    let c = a * b
    console.log(`C ${c}`)
}
math(10, 10)
//arrow with parameters, with return
let multiply = (a = 0, b = 0) => {
    return a * b
}
console.log(multiply(10, 10))

//if fun has only return statement, we can remove {} and return statement
multiply = (a = 0, b = 0) => a * b
console.log(multiply(10, 10))