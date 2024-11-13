import { createRoot } from "react-dom/client"

//variable pattern 
//Here Heading is just variable , referencing the Component
//<h1>xxx</h1> -  Component
const Heading = <h1>Hello React! How are you?</h1>

createRoot(document.getElementById('root')).render(Heading)


