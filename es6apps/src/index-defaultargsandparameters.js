//default args and parameters

function math(a = 0, b = 0) {
    let c = a * b
    console.log(`Result is ${c}`)
}
math(10, 10)
math("a", "b")
math()