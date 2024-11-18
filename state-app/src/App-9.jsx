import React from "react";


class Review extends React.Component {
    state = {
        like: 0,
        dislike: 0
    }
    onLike = () => {
        // this.setState(prevState => {
        //     return { ...prevState, like: prevState.like + 1 }
        // })
        // this.setState(prevState => ({ ...prevState, like: prevState.like + 1 }))

        this.setState(({ ...this.state, like: this.state.like + 1 }))

    }
    onDislike = () => {
        // this.setState(prevState => ({ ...prevState, dislike: prevState.dislike + 1 }))
        this.setState(({ ...this.state, dislike: this.state.dislike + 1 }))

    }
    render() {
        return <ReviewDashboard {...this.state} onLike={this.onLike} onDislike={this.onDislike} />
    }
}
const ReviewDashboard = props => {
    return <div>
        <h1>Review App</h1>
        <h2>Like : {props.like}  Dislike : {props.dislike}</h2>
        <button onClick={props.onLike}>Like</button>
        <button onClick={props.onDislike}>Dislike</button>
    </div>
}

function App() {
    return <>
        <Review />
    </>
}
export default App;