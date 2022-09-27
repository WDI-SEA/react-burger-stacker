import React, { Component } from 'react'
import BurgerPane from './BurgerPane'
import IngredientList from './IngredientList'

export default class App extends Component {
  render() {
    return (
      <div>
        
        <IngredientList />

        <BurgerPane />

      </div>
    )
  }
}
