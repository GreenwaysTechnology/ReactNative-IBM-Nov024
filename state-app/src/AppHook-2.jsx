import { useState } from "react"

const Counter = props => {
    const [counter, setCounter] = useState(0)
    return <div>
        <h1>Counter {counter}</h1>
        <button onClick={() => setCounter(counter + 1)}>+</button>
    </div>
}



export default function App() {
    return <>
        <Counter />
    </>
}