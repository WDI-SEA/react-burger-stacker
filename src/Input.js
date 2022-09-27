import React, { Component } from "react"
import Ingredient from './Ingredient'

export default class Input extends Component {
  render() {
    const ingredients = this.props.items.map((ingredient, i) => {
      return (
        <Ingredient 
          key={`ingredient_${i}`}
          ingredient={ingredient}
          // isStacked={false}
        />
      )
    })
    return (
      <div className="stacker-selection">
        {ingredients}
      </div>
    )
  }
}