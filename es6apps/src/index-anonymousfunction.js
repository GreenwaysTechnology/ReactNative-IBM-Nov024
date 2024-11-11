//let is keyword,a is just variable, 10 is just value(number)
let a = 10
let name = 'admin'
let isActive = true

//function as value: anonymous function
let hello = function () {
    console.log('hello')
}
//hello()
hello()
//anonymous functions args,parameters default args

let math = function (a = 0, b = 0) {
    return a * b
}
console.log(math())
console.log(math(10,2))