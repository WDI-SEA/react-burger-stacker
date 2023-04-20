import React, { Component } from 'react'

export default class Ingredients extends Component{
  
  handleClick = (item) => {
    this.props.handleAddIngredient(item)
  }
  
  render() {

    const ingredients = this.props.ingredients.map((ingredient, i) => {
      return(
        <ul key={`ingredient ${i}`} >
          <button onClick={() => this.handleClick(ingredient.name)}>{ingredient.name}</button>
        </ul>
      )
    })
    
    return(
        <div>
            {ingredients}
        </div>
    )
  }
}