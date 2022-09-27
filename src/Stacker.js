import React, { Component } from "react"
import Ingredient from "./Ingredient"

export default class Stacker extends Component {

  handleClick = () => {
    this.props.clearStack()
  }

  render() {
    const stacked = this.props.stacked.map(ingredient => {
      return (
        <Ingredient
          ingredient={ingredient}
          isStacked={true}
        />
      )
    })

    return (
      <div className="stacker-menu">

        <button 
          className="btn"
          onClick={this.handleClick}
        >
          Clear Burger
        </button>

      </div>
    )
  }
}