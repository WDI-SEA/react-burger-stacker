import React, { Component } from 'react'
import IngredientList from './IngredientList'
import BurgerPane from './BurgerPane'

class App extends Component {
  render() {
    return (
      <div>
        <p>Hello From App.jsx</p>
        <IngredientList />
        <BurgerPane />
      </div>
    )
  }
}

export default App;
