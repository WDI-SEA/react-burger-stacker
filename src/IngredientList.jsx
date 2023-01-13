import React, { Component } from 'react'
import Ingredient from './Ingredient'

export default class IngredientList extends Component {
  render() {
    const ingredients = this.props.ingredients.map((ingredient, i) => {
      return (
        <>
          <Ingredient key={`ingredient-${i}`} ingredient={ingredient} handleClick={this.props.handleClick} />
        </>
      )
    })

    return <div className="IngredientList">{ingredients}</div>
  }
}
