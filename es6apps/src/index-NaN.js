let price
let qty = 100;
let totalPrice = price * qty; //undefined * 100
console.log(`Price ${price} and qty is ${qty} Total Price is ${totalPrice}`)

let a = "10"
let b = 10
let c = a * b
//here "10" is string , js converts into number automatically called implicit conversion
console.log(` c ${c}`)

//a with different
a = "$20"
c = a * b
console.log(` c ${c}`)

//a with different types
a = "$20"
c = parseInt(a) * b
console.log(` c ${c}`)

a = "$20"
c = Number(a) * b
console.log(` c ${c}`)

a = "$20"
c = +a * b
console.log(` c ${c}`)