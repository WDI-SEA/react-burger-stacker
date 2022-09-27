import React, { Component } from "react"
import Ingredient from './Ingredient'

export default class Input extends Component {
  render() {
    const ingredients = this.props.items.map((ingredient, i) => {
      return (
        <>
          <Ingredient 
            key={`ingredient_${i}`}
            ingredient={ingredient}
            addIngredient={this.props.addIngredient}
            isStacked={false}
            index={i}
          />
        </>
      )
    })
    return (
      <div className="stacker-selection">
        {ingredients}
      </div>
    )
  }
}