import React, { Component } from 'react';
import './App.css';
import IngredientList from './IngredientList';
import BurgerPane from './BurgerPane';



export default class App extends Component {
  render() {
    return (
      <div className="App">
        <div>
          <IngredientList ingredients={this.props.ingredients} />
        </div>
        <div>
          <BurgerPane />
        </div>
      </div>
    )
  }
}