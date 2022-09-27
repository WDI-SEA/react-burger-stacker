import { Component } from "react"

export default class Ingredients extends Component {
    render () {
        return (
            <div>
                <li style={{
                    backgroundColor: `${this.props.color}`
                    }}
                    onClick = {this.props.ingredientButton}>
                    {this.props.ingredient}
                </li>
            </div>
        )
    }
}


