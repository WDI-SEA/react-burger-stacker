import React, { Component } from 'react'


export default class IngredientList extends Component{

    
    render(){
        const ingredients = this.props.ingredients.map((ingredient, i) => {
            return (
                <li
                    stlye={{backgroundColor:`${ingredient.color}`}} key={`ingredient${i}`}
                >
                    {ingredient.name}, {ingredient.color}
                </li>
            )
        })
    return(
      <ul>
        {ingredients}
      </ul>
    )
  }
}