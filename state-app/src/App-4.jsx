import React from "react";


class Review extends React.Component {

    //declare state
    state = {
        //your state
        like: 0
    }
    //listener 
    onLike = () => {
        this.state.like++
        // console.log(this.state)
        this.render()
    }
    render() {
        console.log('render is called')
        console.log(this.state)
        return <div>
            <h1>Review App</h1>
            <h2>Like : {this.state.like}</h2>
            <button onClick={this.onLike}>Like</button>
        </div>
    }
}

function App() {
    return <>
        <Review />
    </>
}
export default App;