// function getStock() {
//     return {
//         id: 1,
//         symbol: 'google',
//         qty: 100,
//         price: 1000
//     }
// }
// console.log(getStock())

// function getStock(id = 0, symbol = 'Foo', qty = 0, price = 0) {
//     return {
//         id: id,
//         symbol: symbol,
//         qty: qty,
//         price: price
//     }
// }
// console.log(getStock(1, 'google', 100, 1000))
// console.log(getStock())

// function getStock(id = 0, symbol = 'Foo', qty = 0, price = 0) {
//     //destructuring
//     return {
//         //left;right if same,make it
//         id,
//         symbol,
//         qty,
//         price
//     }
// }
// const getStock = (id = 0, symbol = 'Foo', qty = 0, price = 0) => {
//     return {
//         id,
//         symbol,
//         qty,
//         price
//     }
// }
const getStock = (id = 0, symbol = 'Foo', qty = 0, price = 0) => ({
    id,
    symbol,
    qty,
    price
})

console.log(getStock(1, 'google', 100, 1000))
console.log(getStock())