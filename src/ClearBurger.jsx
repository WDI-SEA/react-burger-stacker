import { Component } from "react" 

export default class ClearBurger extends Component {
    render() {
        return (
            <div>
                <button onClick = {this.props.clearButton}>Make a new burger </button>
            </div>
        )
    }
}

