import React, { Component } from 'react'
import IngredientList from './IngredientList'
import BurgerPane from './BurgerPane'

/*
App
|--IngredientList
|   |--Ingredient(s)
|
|--BurgerPane
|   |--BurgerStack
|   |   |--Ingredient(s)
|   |
|   |--ClearBurger
*/

export default class App extends Component {

  state = {
    burgerStack: []
  }

  handleAddIngredient = (item) => {
    console.log('handling add ingredient')
    this.setState({ burgerStack: [item, ...this.state.burgerStack] })
  }

  handleClearBurger = () => {
    console.log('handling clear burger')
    this.setState({ burgerStack: [] })
  }

  render() {
    return (
      <div>
        <IngredientList onAddIngredient={this.handleAddIngredient} />
        <BurgerPane 
          onClearBurger={this.handleClearBurger} 
            
        />
      </div>
    )
  }
}