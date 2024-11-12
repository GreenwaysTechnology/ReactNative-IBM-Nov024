function blockMe(message) {
    console.log(message)
}
function sayHello(abc) {
    setTimeout(abc, 5000,'Hello')
}
function main() {
    blockMe('start')
    sayHello((message) => {
        console.log(message)
    })
    blockMe('end')
}
main()