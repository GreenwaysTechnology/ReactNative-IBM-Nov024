import { configureStore, createReducer } from "@reduxjs/toolkit";
import { useDispatch, useSelector } from "react-redux";

//reducer-old way
// const CounterReducer = (count = 10, action) => {
//     //biz logic
//     switch (action.type) {
//         case 'counter/increment':
//             //immutable logic//pure function
//             return count + 1

//         case 'counter/decrement':
//             //immutable logic//pure function
//             return count - 1
//         default:
//             return count; //default state
//     }
// }
//using createReducer function

let initialState = { value: 0 }
const incrementAction = 'counter/increment'
const decrementAction = 'counter/decrement'

const CounterReducer = createReducer(initialState, builder => {
    //biz logic
    builder.addCase(incrementAction, (state, action) => {
        //immer js code directly
        state.value += 1
    }).addCase(decrementAction, (state, action) => {
        //immer js code directly
        state.value -= 1
    }).addDefaultCase((state, action) => { })
})

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
        dispatch({ type: incrementAction })
    }
    return <div>
        <h1>Count {count.value}</h1>
        <button onClick={onIncrement}>+</button>
        <button onClick={() => {
            dispatch({ type: decrementAction })
        }}>-</button>

    </div>
}



export default function App() {

    return <>
        <h1>React Redux Integration</h1>
        <Counter />
    </>
}