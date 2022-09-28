import React, { Component } from "react"
import BurgerStack from './BurgerStack'
import BurgerClear from './BurgerClear'

export default class BurgerPane extends Component {
  render () {
    return (
      <div>
        < BurgerStack 
            clickedIngredients={this.props.clickedIngredients}
            
        />
        <BurgerClear 
            handleBurgerClear={this.props.handleBurgerClear}
        />
      </div>
    )
  }
}