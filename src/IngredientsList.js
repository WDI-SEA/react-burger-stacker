import React, { Component } from 'react'


export default class IngredientsList extends Component {
  


  render() {
    const ingredients = this.props.supplies.map((ingredient, i) => {
    return <button key={`ingredient-${i}`}>{ingredient.name} </button>
  })
    console.log(ingredients)
    return (
      <div>
        {ingredients}
      </div>
    )
  }
}