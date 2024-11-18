import { useState } from "react"

const Counter = props => {
    const [increment, setIncrement] = useState(0)
    const [decrement, setDecrement] = useState(100)
    return <div>
        <h1>Increment {increment} Decrement {decrement}</h1>
        <button onClick={() => setIncrement(increment + 1)}>+</button>
        <button onClick={() => setDecrement(decrement - 1)}>-</button>

    </div>
}

export default function App() {
    return <>
        <Counter />
    </>
}