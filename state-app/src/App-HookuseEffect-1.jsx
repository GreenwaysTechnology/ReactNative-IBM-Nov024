import { useEffect, useState } from "react"


const Timer = () => {

    const [count, setCount] = useState(0)

    useEffect(() => {
        setTimeout(() => {
            setCount(count + 1)
        }, 1000)
    },[])

    return <div>
        <h1>Count : {count}</h1>
    </div>

}


export default function App() {
    return <>
        <Timer />
    </>
}