import { useState } from "react"

const Counter = props => {
    const [counter, setCounter] = useState({ increment: 0, decrement: 100 })
    return <div>
        <h1>Increment {counter.increment} Decrement {counter.decrement}</h1>
        <button onClick={() => {
            setCounter(({ ...counter, increment: counter.increment + 1 }))
        }}>+</button>
        <button onClick={() => {
            setCounter(({ ...counter, decrement: counter.decrement - 1 }))
        }}>-</button>
    </div>
}

export default function App() {
    return <>
        <Counter />
    </>
}