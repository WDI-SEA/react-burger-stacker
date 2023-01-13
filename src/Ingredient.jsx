import React, { Component } from 'react'

export default class Ingredient extends Component {
  render() {
    return (
      <div
        key={`ingredient-${this.props.idx}`}
        style={{ backgroundColor: this.props.ingredient.color, color: 'black' }}
        onClick={this.props.handleClick}
      >
        {this.props.ingredient.name}
      </div>
    )
  }
}
