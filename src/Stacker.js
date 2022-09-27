import React, { Component } from "react"
import Ingredient from "./Ingredient"

export default class Stacker extends Component {

  handleClick = () => {
    this.props.clearStack()
  }

  render() {
    const stacked = this.props.stacked.map((ingredient, i, arr) => {
      return (
        <Ingredient
          key={`stacked_${i}`}
          ingredient={ingredient}
          isStacked={true}
          isTop = {i === 0 ? true : false}
          isBottom = { i === arr.length - 1 ? true : false}
          index={i}
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