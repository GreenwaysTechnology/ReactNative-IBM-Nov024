function createNode() {
    const Heading = document.createElement('h1')
    Heading.innerHTML = 'Hello React!'
    console.dir(Heading)
    //get the element where you want to insert
    const rootElement = document.getElementById('root')
    rootElement.appendChild(Heading)
}
createNode()