import { configureStore, createSlice } from "@reduxjs/toolkit";
import { useDispatch, useSelector } from "react-redux";

let initialState = { value: 0 }

const counterSlice = createSlice({
    name: 'counter',
    initialState,
    reducers: {
        increment(state, action) {
            //immerjs default
            state.value++
        },
        decrement(state, action) {
            state.value--
        },
        incrementBy(state, action) {
            state.value += action.payload
        }
    }
})
//extract slice
const CounterReducer = counterSlice.reducer
//extract actions
const { increment, decrement, incrementBy } = counterSlice.actions



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
        dispatch({ type: increment })
    }
    return <div>
        <h1>Count {count.value}</h1>
        <button onClick={onIncrement}>+</button>
        <button onClick={() => {
            dispatch({ type: decrement })
        }}>-</button>

    </div>
}



export default function App() {

    return <>
        <h1>React Redux Integration</h1>
        <Counter />
    </>
}