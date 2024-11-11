//function as parameter

function add(a, b) {
    return a + b
}
//passing value
//via variable
let x = 10
let y = 20
console.log(add(x, y))

//via values directly
console.log(add(20, 30))
///////////////////////////////////////////////////////////

function connect(cb) {
    cb()
}
let hello = function () {
    console.log('hello')
}
connect(hello)

connect(function () {
    console.log('hello')
})
//////////////////////////////////////////////////////////////////////////////
//hof with parameters
function calculate(cb) {
    cb(20, 30)
}
let adder = function (a = 0, b = 20) {
    console.log(a + b)
}
calculate(adder)
calculate(function (a = 0, b = 0) {
    console.log(a + b)
})
//hof with parameters and return value

function calc(cb) {
    let result = cb(10, 10)
    console.log(result)
}
adder = function (a = 0, b = 20) {
    return a + b
}
calc(adder)
calc(function (a = 0, b = 0) {
    return a + b
})
//hof with other parameters

function login(userName, password, success, failure) {
    if (userName === 'admin' && password === 'admin') {
        success('login success')
    } else {
        failure('login failed')
    }
}
login('admin', 'admin', function (status) {
    console.log(status)
}, function (err) {
    console.log(err)
})
login('foo', 'bar', function (status) {
    console.log(status)
}, function (err) {
    console.log(err)
})