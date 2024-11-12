function blockMe(message) {
    console.log(message)
}
function getValue() {
    return Promise.resolve('success')
}

function main() {
    blockMe('start')
    getValue().then(message=>console.log(message))
    blockMe('end')
}
main()