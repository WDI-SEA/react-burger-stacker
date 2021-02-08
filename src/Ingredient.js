import React, { Component } from 'react'

class Ingredient extends Component {
    render() {
        return (
            <li style={{backgroundColor: this.props.color}} key={this.props.key}>
                {this.props.ingredient}
            </li>
        )
    }
}

export default Ingredient