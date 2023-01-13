import { Component } from "react";

export default class Ingredients extends Component {
    render() {
        return(
            <div>
                {this.props.item.name}
            </div>
        )
    }
}