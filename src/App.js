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
  render() {
    return (
      <div className='App'>
        <IngredientList />
        <BurgerPane />
      </div>
    )
  }
}