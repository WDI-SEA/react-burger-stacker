import { Component } from "react"

export default class IngredientList extends Component {
    render() {
        return (
            <div>
                <h4>Name: {this.props.name}</h4>

                <h6>Color: {this.props.color}</h6>
            </div>
        )
    }
}