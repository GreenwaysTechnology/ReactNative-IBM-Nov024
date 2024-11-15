import React from "react";


class Review extends React.Component {

    //declare state
    state = {
        //your state
        like: 0
    }
    //listener 
    onLike = () => {
        //write pure function to change the state
        this.setState(prevState => {
            //return immutable
            //plain js pattern
            // return {
            //     like: prevState.like + 1
            // }
            // //object.assign
            // return Object.assign({}, prevState, { like: prevState.like + 1 })

            //spread notation
            return { ...prevState, like: prevState.like + 1 }
        })
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