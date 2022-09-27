import React, { Component } from "react"
import Ingredient from "./Ingredient"

export default class Stacker extends Component {

  handleClick = () => {
    this.props.clearStack()
  }

  render() {
    const stacked = this.props.stacked.map((ingredient, i) => {
      return (
        <Ingredient
          key={`stacked_${i}`}
          ingredient={ingredient}
          isStacked={true}
          fadeIn = {i === 0 ? true : false}
        />
      )
    })

    return (
      <div className="stacker-menu">

        {stacked}

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