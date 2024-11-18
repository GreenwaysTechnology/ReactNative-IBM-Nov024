import { useState } from "react"

//counter
const Counter = props => {
    //state declaration
    const [counter, setCounter] = useState(0)

    const onIncrement = () => {
        // setCounter(prevState => {
        //     return prevState + 1
        // })
        setCounter(counter + 1)
    }
    return <div>
        <h1>Counter {counter}</h1>
        <button onClick={onIncrement}>+</button>
    </div>
}



export default function App() {
    return <>
        <Counter />
    </>
}