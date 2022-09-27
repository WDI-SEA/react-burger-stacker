import React, { Component } from "react" 

class ClearBurger extends Component {
    render() {
        return (
            <div id="ClearBurger">
                <button onClick = {this.props.clearButton}>Clear</button>
            </div>
        )
    }
}

export default ClearBurger