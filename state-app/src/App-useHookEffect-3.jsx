import { useEffect, useState } from "react"


const Timer = () => {

    const [count, setCount] = useState(0)

    //call this every re render : componentDidUpdate
   
    useEffect(() => {
        let timer = setTimeout(() => {
            setCount(count + 1)
        }, 1000)
        //componentWillUnMount
        return () => {
            //clean up code
            clearTimeout(timer)
        }

    }, [])

    return <h1>{count} times rendered</h1>

}

  



export default function App() {
    return <>
        <Timer />
    </>
}