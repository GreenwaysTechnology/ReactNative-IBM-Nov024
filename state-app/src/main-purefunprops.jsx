import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'

//pure function: it recives input, no changes on object
// const Welcome = props => {
//     return <h1>{props.message}</h1>
// }

const Welcome = props => {
    //update props
    props.message = 'foo'    
    return <h1>{props.message}</h1>
}
//react component
const App = () => {

    return <>
     <Welcome message="hello"/>
    </>
}



createRoot(document.getElementById('root')).render(
    <StrictMode>
        <App />
    </StrictMode>,
)
