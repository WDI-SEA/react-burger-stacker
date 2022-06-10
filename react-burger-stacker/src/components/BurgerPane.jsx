import React, { Component } from "react"
import Ingredient from "./Ingredients"

class BurgerPane extends Component {
  render() {
      const stackRender = this.props.stack.map((item, i)=>{
          return <Ingredient 
            item={item}
            i={i}
          />
      })
    return (
      <>
        <h2> Burger Pane </h2>
        <button onClick={this.props.handleRemove}>Remove</button>
        {stackRender}
      </>
    )
  }
}

export default BurgerPane
