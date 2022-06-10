import React, { Component } from 'react'

export default class Ingredient extends Component {
    render() {
        return (
            <button
                onClick={this.props.onIngredientClick}
                value={this.props.name}
                style={{ backgroundColor: `${this.props.color}` }}
            >
                {this.props.name}
            </button>
        )
    }
}
