import { configureStore } from "@reduxjs/toolkit";
import { useState } from "react"
import { Provider, useDispatch, useSelector } from "react-redux";

//reducer-old way
const CounterReducer = (count = 10, action) => {
    //biz logic
    switch (action.type) {
        case 'counter/increment':
            //immutable logic//pure function
            return count + 1
        default:
            return count; //default state
    }
}

//step 2 store object
export const store = configureStore({
    reducer: {
        //nameofReducer: ReducerFunction
        counter: CounterReducer
    }
})


const Counter = () => {
    const count = useSelector(state => {
        return state.counter
    })
    const dispatch = useDispatch()

    const onIncrement = () => {
        dispatch({ type: 'counter/increment' })
    }
    return <div>
        <h1>Count {count}</h1>
        <button onClick={onIncrement}>+</button>
    </div>
}



export default function App() {

    return <>
        <h1>React Redux Integration</h1>
        <Counter />
    </>
}