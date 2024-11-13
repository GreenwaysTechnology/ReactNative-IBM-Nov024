import { createRoot } from "react-dom/client"
import logo from './assets/react.svg';

const Heading = () => {
    return <div>
        <img src={logo} />
    </div>
}


createRoot(document.getElementById('root')).render(<Heading />)


