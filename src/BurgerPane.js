import React, { Component } from 'react'
import BurgerStack from './BurgerStack'
import ClearBurger from './ClearBurger'


export default class BurgerPane extends Component {
  render() {
    return (
      <div>
        <BurgerStack 
          clickedIngredients={this.props.clickedIngredients}
        />

        <ClearBurger 
          handleBurgerClear={this.props.handleBurgerClear}
        />
      </div>
    )
  }
}