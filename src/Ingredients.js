import React, { Component } from "react"

class Ingredients extends Component {
    render () {
        return (
            <div id="Ingredients">
                <ul style={{
                    backgroundColor: `${this.props.color}`
                    }}
                    onClick = {this.props.ingredientButton}
                >
                    {this.props.ingredient}
                </ul>
            </div>
        )
    }
}


export default Ingredients