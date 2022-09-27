import React, { Component } from 'react'


export default class IngredientsList extends Component {
  
  render() {
    const ingredients = this.props.supplies.map((ingredient, i) => {
    return <li key={`ingredient-${i}`}>{ingredient.name} </li>
  })
    console.log(ingredients)
    return (
      <div>
        {ingredients}
      </div>
    )
  }
}