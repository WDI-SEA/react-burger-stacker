import React, { Component } from "react"

export default class Ingredient extends Component {
  state = {
    stacked: this.props.isStacked
  }

  handleClick = () => {
    this.props.addIngredient(this.props.ingredient)
  }

  render() {
    const ingredient = this.props.ingredient
    const ingredientStyle = ingredient.includes('bun')   ? `bun`   :
                            ingredient.includes('patty') ? 'patty' : ingredient
                            

    return (
      <div
        key={this.props.key}
        className={`item ${ingredientStyle}`}
        onClick={this.handleClick}
      >
        <p>{ingredient}</p>
      </div>
    )
  }
}