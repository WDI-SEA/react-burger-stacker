import React, { Component } from 'react';
import './App.css';
import IngredientList from './IngredientList';
import BurgerPane from './BurgerPane';



export default class App extends Component {
  state = {
    burger: []
  }

  render() {
    return (
      <div className="App">
        <div className="ingredientListContainer">
          <IngredientList ingredients={this.props.ingredients} />
        </div>
        <div className="burgerPaneContainer">
          <BurgerPane />
        </div>
      </div>
    )
  }
}