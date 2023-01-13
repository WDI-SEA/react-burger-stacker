import React, { Component } from 'react'
import Ingredient from './Ingredient'

export default class BurgerStack extends Component {
  render() {
    const ingredients = this.props.ingredients.map((ingredient, i) => {
      return (
        <>
          <Ingredient
            key={`burgerIngredient-${i}`}
            ingredient={ingredient}
          />
        </>
      )
    })

    return (
      <div className="BurgerStack">
        {ingredients}
      </div>
    )
  }
}
