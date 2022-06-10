import React, { Component } from 'react'
import Ingredients from './Ingredients'

export default class Burger extends Component {
  render() {
    const burgerComponents = this.props.burger.map((ingredient, i) => {
        return (
            <Ingredients 
                name={ingredient.name}
                color={ingredient.color}
                key={i}
                onIngredientClick={this.props.onIngredientClick}
            />
        )
  })
    return (
      <div>
          {burgerComponents}
      </div>
    )
  }
}
