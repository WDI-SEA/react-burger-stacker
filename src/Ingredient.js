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
    
    if(this.state.stacked) console.log(ingredient, this.props.index)
    
    return (
      <div
        key={this.props.key}
        className={`
          item 
          ${ingredientStyle}
          ${this.props.isTop ? 'fade-in' : ''}
          ${this.props.isBottom && ingredient.includes('bun') ? 'bottom' :
            this.props.isTop    && ingredient.includes('bun') ? 'top'    : ''}
        `}
        onClick={this.handleClick}
      >
        <p>{ingredient}</p>
      </div>
    )
  }
}