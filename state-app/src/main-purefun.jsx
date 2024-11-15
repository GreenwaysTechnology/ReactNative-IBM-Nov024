// if function receives input, the function returns the input without any mutation...

//this is pure function ; no changes happening on input parameter
function hello(message) {
    return message
}
console.log(hello('hello'))

//is this function is pure or not: impure function
function doubleIt(value) {
    return value * 2
}
console.log(doubleIt(20))