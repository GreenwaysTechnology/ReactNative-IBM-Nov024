import { useState } from "react"



const Counter = () => {
  const [count, setCount] = useState(0)

  const onIncrement = () => {
    setCount(count + 1)
  }
  return <div>
    <h1>Count {count}</h1>
    <button onClick={onIncrement}>+</button>
  </div>
}



export default function App() {

  return <>
    <h1>React Redux Integration</h1>
    <Counter/>
  </>
}