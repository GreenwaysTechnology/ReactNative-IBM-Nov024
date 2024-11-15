import React from "react";


class Review extends React.Component {

    state = {
        like: 0,
        dislike: 0
    }
    //listener 
    onLike = () => {
        this.setState(prevState => {
            return { ...prevState, like: prevState.like + 1 }
        })
    }
    onDislike = () => {
        this.setState(prevState => {
            return { ...prevState, dislike: prevState.dislike + 1 }
        })
    }
    render() {
        return <div>
            <h1>Review App</h1>
            <h2>Like : {this.state.like}  Dislike : {this.state.dislike}</h2>
            <button onClick={this.onLike}>Like</button>
            <button onClick={this.onDislike}>Dislike</button>

        </div>
    }
}

function App() {
    return <>
        <Review />
    </>
}
export default App;