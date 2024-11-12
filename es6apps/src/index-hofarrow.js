// function connect(cb) {
//     cb()
// }
let connect = (cb) => cb()

// let hello = function () {
//     console.log('hello')
// }
let hello = () => console.log('hello')
connect(hello)

connect(() => console.log('hello'))

let calculate = (cb) => cb(20, 30)

let adder = (a = 0, b = 20) => console.log(a + b)
calculate(adder)

calculate((a = 0, b = 0) => console.log(a + b))

let login = (userName, password, success, failure) => {
    if (userName === 'admin' && password === 'admin') {
        success('login success')
    } else {
        failure('login failed')
    }
}
login('admin', 'admin', (status) => console.log(status), (err) => console.log(err))

login('foo', 'bar', (status) => console.log(status), (err) => console.log(err))