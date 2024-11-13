import { createRoot } from "react-dom/client"

//functions 
function Heading() {
    return <h1>Hello, React!</h1>
}

// createRoot(document.getElementById('root')).render(Heading())
// createRoot(document.getElementById('root')).render(<Heading></Heading>)

createRoot(document.getElementById('root')).render(<Heading/>)


