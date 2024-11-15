import React from "react";


class Review extends React.Component {

    //declare state
    state = {
        //your state
        like: 0
    }

    render() {
        console.log(this.state)
        return <div>
            <h1>Review App</h1>
            <h2>Like : {this.state.like}</h2>
        </div>
    }
}

function App() {
    return <>
        <Review />
    </>
}
export default App;