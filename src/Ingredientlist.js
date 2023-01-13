import React, { Component } from "react"
import Ingredient from "./Ingredient"

export default class IngredientList extends Component {
    render() {
        const ingredientsArray = this.props.ingredients.map((ingredient,idx) => {
        return(
          <Ingredient
            ingredient = {ingredient}

            key = {`ingredient${idx}`}
            handleIngredientClick = {this.props.handleIngredientClick}
          />
        )
      })
        return(
          <>
            {ingredientsArray}
          </>
        )
      }
}