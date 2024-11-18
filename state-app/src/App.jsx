import React from "react";


class Review extends React.Component {
    state = {
        house: {
            name: 'RavenClaw',
            points: 10
        },

    }

    onLike = () => {
        this.setState(prevState => {
            return {
                ...prevState, //level-0-copy // copy all outer keys of state
                house: {
                    ...prevState.house, // level-1 copy //copy all state except points
                    points: prevState.house.points + 1
                }
            }
        })
    }
    render() {
        return <div>
            <h1>House Review App</h1>
            <h2>{this.state.house.name}</h2>
            <h2>Points {this.state.house.points}</h2>
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