import React, { Component } from 'react'

export default class Ingredients extends Component{
  render() {

    const ingredients = this.props.ingredients.map((ingredient, i) => {
      return(
        <ul>
          <button key={`ingredient ${i}`}>{ingredient.name}</button>
        </ul>
      )
    })
    console.log(ingredients[0].name)
    return(
        <div>
            {ingredients}
        </div>
    )
  }
}