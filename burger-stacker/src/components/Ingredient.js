import React, { Component } from 'react'

export default class Ingredient extends Component {
    render() {
        return (
            <p style={{backgroundColor: this.props.ingredient.color}} onClick={this.props.clicky}>
            {this.props.ingredient.name}
            </p>
        )
    }
}