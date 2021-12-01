import React, { Component } from 'react'
import './App.css';
import IngredientList from './IngredientList'
import BurgerStack from './BurgerStack';
import './index.js'

export default class App extends Component{
  render() {
    const ingredients = this.props.ingredients
    return (
      <div className="App">
        <header className="App-header">
          <div className="parentContainer">
            <div className="container">
              <h2>Choose Your Ingredients</h2>
              <IngredientList ingredients={ingredients}/>
            </div>
            <div className="container">
              <h2>Build Your Burger</h2>
              <BurgerStack ingredients={ingredients}/>
            </div>
          </div>
        </header>
      </div>
    )
  }
}

