import { createRoot } from "react-dom/client"

const Hello = () => <h1>Hello,How are you</h1>

const Welcome = () => {
    return <>
        <Hello />
    </>
}
const Greeter = () => {
    return <>
        <Hello />
    </>
}
//Application comonent, which injects other components
const App = () => {
    return <>
        <Welcome />
        <Greeter />
    </>
}


createRoot(document.getElementById('root')).render(<App />)